import http from 'node:http';
import { createReadStream, existsSync, statSync, mkdirSync, cpSync } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { MongoClient } from 'mongodb';
import { createMediaStore } from './media-store.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(root, 'dist');
const assetDir = process.env.ASSET_DIR ? path.resolve(process.env.ASSET_DIR) : path.join(distDir, 'assets');
if (process.env.ASSET_DIR) {
  mkdirSync(assetDir, { recursive: true });
  cpSync(path.join(distDir, 'assets'), assetDir, { recursive: true });
}
const port = Number(process.env.API_PORT || process.env.PORT || 3013);
const username = process.env.ADMIN_USERNAME;
const password = process.env.ADMIN_PASSWORD;
const sessionSecret = process.env.SESSION_SECRET;
const mongoUri = process.env.MONGODB_URI;
const mongoUser = process.env.MONGODB_USER;
const mongoPassword = process.env.MONGODB_PASSWORD;
const mongoAuthSource = process.env.MONGODB_AUTH_SOURCE;
const sessions = new Map();
const loginAttempts = new Map();

if (!username || !password || !sessionSecret || !mongoUri || !mongoUser || !mongoPassword || !mongoAuthSource) {
  console.error('Admin and MongoDB environment variables are required.');
  process.exit(1);
}
if (password.length < 10 || sessionSecret.length < 24) {
  console.error('ADMIN_PASSWORD must have at least 10 characters and SESSION_SECRET at least 24 characters.');
  process.exit(1);
}

const mongoClient = new MongoClient(mongoUri, {
  auth: { username: mongoUser, password: mongoPassword },
  authSource: mongoAuthSource,
  serverSelectionTimeoutMS: 10_000
});
await mongoClient.connect();
const database = mongoClient.db();
const adminAccounts = database.collection('admin_accounts');
const contentCollections = database.collection('content_collections');
const mediaStore = createMediaStore(database);
const contentCache = new Map();
const contentPending = new Map();
async function loadPublicContent(type) {
  const cached = contentCache.get(type);
  if (cached && cached.expires > Date.now()) return cached.value;
  if (contentPending.has(type)) return contentPending.get(type);
  const work = (async () => {
    const document = await contentCollections.findOne({ _id: type });
    const value = { initialized: Boolean(document), items: await mediaStore.externalize(document?.items || []) };
    contentCache.set(type, { value, expires: Date.now() + 30000 });
    return value;
  })().finally(() => contentPending.delete(type));
  contentPending.set(type, work);
  return work;
}
await adminAccounts.createIndex({ username: 1 }, { unique: true });

if (!await adminAccounts.findOne({ username })) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.scryptSync(password, salt, 64).toString('hex');
  const seeded = await adminAccounts.updateOne(
    { username },
    { $setOnInsert: { username, salt, hash, createdAt: new Date() } },
    { upsert: true }
  );
  if (seeded.upsertedCount) console.log(`Seeded administrator account: ${username}`);
}

function sendJson(res, status, value, extra = {}) {
  const body = JSON.stringify(value);
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Content-Length': Buffer.byteLength(body), ...extra });
  res.end(body);
}

function parseCookies(req) {
  return Object.fromEntries((req.headers.cookie || '').split(';').filter(Boolean).map(v => {
    const index = v.indexOf('=');
    return [v.slice(0, index).trim(), decodeURIComponent(v.slice(index + 1))];
  }));
}

function sign(value) {
  return `${value}.${crypto.createHmac('sha256', sessionSecret).update(value).digest('base64url')}`;
}

function getSession(req) {
  const token = parseCookies(req).ocean_admin;
  if (!token) return null;
  const [id, signature] = token.split('.');
  if (!id || !signature) return null;
  const expected = sign(id).split('.')[1];
  if (signature.length !== expected.length || !crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;
  const session = sessions.get(id);
  if (!session || session.expiresAt < Date.now()) { sessions.delete(id); return null; }
  session.expiresAt = Date.now() + 8 * 60 * 60 * 1000;
  return session;
}

async function readBody(req) {
  let size = 0;
  const chunks = [];
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 12 * 1024 * 1024) throw new Error('PAYLOAD_TOO_LARGE');
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}');
}

function sanitizeHtml(html = '') {
  return String(html)
    .replace(/<\s*(script|iframe|object|embed|form|input|button|textarea|select)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, '')
    .replace(/<\s*(script|iframe|object|embed|form|input|button|textarea|select)[^>]*\/?>/gi, '')
    .replace(/\s(on\w+|srcdoc)\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/(href|src)\s*=\s*(["'])\s*javascript:[\s\S]*?\2/gi, '$1="#"');
}

function cleanItem(item) {
  if (!item || typeof item !== 'object' || Array.isArray(item)) return null;
  const clean = {};
  for (const [key, value] of Object.entries(item)) {
    if (typeof value === 'string') clean[key] = key === 'content' ? sanitizeHtml(value).slice(0, 8_000_000) : value.slice(0, 8_000_000);
    else if (typeof value === 'number' || typeof value === 'boolean' || value === null) clean[key] = value;
    else if (Array.isArray(value)) clean[key] = value.slice(0, 500).map(cleanNested).filter(value => value !== undefined);
    else if (typeof value === 'object') clean[key] = cleanNested(value);
  }
  return clean.id ? clean : null;
}

function cleanNested(value, depth = 0) {
  if (depth > 4) return undefined;
  if (typeof value === 'string') return value.slice(0, 100_000);
  if (typeof value === 'number' || typeof value === 'boolean' || value === null) return value;
  if (Array.isArray(value)) return value.slice(0, 500).map(item => cleanNested(item, depth + 1)).filter(item => item !== undefined);
  if (typeof value === 'object' && value) return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, cleanNested(item, depth + 1)]).filter(([, item]) => item !== undefined));
  return undefined;
}

async function handleApi(req, res, url) {
  if (req.method === 'GET' && url.pathname === '/api/health') {
    await database.command({ ping: 1 });
    return sendJson(res, 200, { ok: true, database: 'connected' });
  }
  if (req.method === 'POST' && url.pathname === '/api/admin/login') {
    const ip = req.socket.remoteAddress || 'unknown';
    const attempt = loginAttempts.get(ip) || { count: 0, resetAt: Date.now() + 15 * 60_000 };
    if (attempt.resetAt < Date.now()) { attempt.count = 0; attempt.resetAt = Date.now() + 15 * 60_000; }
    if (attempt.count >= 8) return sendJson(res, 429, { message: 'Đăng nhập quá nhiều lần. Vui lòng thử lại sau.' });
    const body = await readBody(req);
    const auth = await adminAccounts.findOne({ username: String(body.username || '') });
    if (!auth) {
      attempt.count += 1; loginAttempts.set(ip, attempt);
      return sendJson(res, 401, { message: 'Tên đăng nhập hoặc mật khẩu không đúng.' });
    }
    const supplied = crypto.scryptSync(String(body.password || ''), auth.salt, 64);
    const stored = Buffer.from(auth.hash, 'hex');
    const validPassword = supplied.length === stored.length && crypto.timingSafeEqual(supplied, stored);
    if (body.username !== auth.username || !validPassword) {
      attempt.count += 1; loginAttempts.set(ip, attempt);
      return sendJson(res, 401, { message: 'Tên đăng nhập hoặc mật khẩu không đúng.' });
    }
    loginAttempts.delete(ip);
    const id = crypto.randomBytes(32).toString('base64url');
    sessions.set(id, { username: auth.username, expiresAt: Date.now() + 8 * 60 * 60_000 });
    const secureCookie = req.socket.encrypted || req.headers['x-forwarded-proto'] === 'https';
    return sendJson(res, 200, { username: auth.username }, { 'Set-Cookie': `ocean_admin=${encodeURIComponent(sign(id))}; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800${secureCookie ? '; Secure' : ''}` });
  }
  if (req.method === 'POST' && url.pathname === '/api/admin/logout') {
    const token = parseCookies(req).ocean_admin;
    if (token) sessions.delete(token.split('.')[0]);
    return sendJson(res, 200, { ok: true }, { 'Set-Cookie': 'ocean_admin=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0' });
  }
  if (req.method === 'GET' && url.pathname === '/api/admin/session') {
    const session = getSession(req);
    return session ? sendJson(res, 200, { username: session.username }) : sendJson(res, 401, { message: 'Chưa đăng nhập.' });
  }
  const mediaMatch = url.pathname.match(/^\/api\/media\/([a-f0-9]{64})$/);
  if (mediaMatch && (req.method === 'GET' || req.method === 'HEAD')) return mediaStore.serve(req, res, mediaMatch[1]);
  const publicMatch = url.pathname.match(/^\/api\/content\/(news|resources|schedules|courses|branches)(?:\/([^/]+))?$/);
  if (req.method === 'GET' && publicMatch) {
    const result = await loadPublicContent(publicMatch[1]);
    const cacheHeaders = { 'Cache-Control': 'public, max-age=30' };
    if (publicMatch[2]) {
      const key = decodeURIComponent(publicMatch[2]);
      const item = result.items.find(item => item.id === key || item.slug === key);
      return sendJson(res, 200, { initialized: result.initialized, item: item || null }, cacheHeaders);
    }
    const summary = url.searchParams.get('view') === 'summary';
    const items = summary ? result.items.map(({ content, infographicImage, ...item }) => item) : result.items;
    return sendJson(res, 200, { initialized: result.initialized, items }, cacheHeaders);
  }
  const adminMatch = url.pathname.match(/^\/api\/admin\/content\/(news|resources|schedules|courses|branches)$/);
  if (adminMatch && req.method === 'GET') {
    if (!getSession(req)) return sendJson(res, 401, { message: 'Unauthorized' });
    const document = await contentCollections.findOne({ _id: adminMatch[1] });
    return sendJson(res, 200, { initialized: Boolean(document), items: await mediaStore.externalize(document?.items || []) }, { 'Cache-Control': 'no-store' });
  }
  if (adminMatch && req.method === 'PUT') {
    if (!getSession(req)) return sendJson(res, 401, { message: 'Phiên đăng nhập đã hết hạn.' });
    const body = await readBody(req);
    if (!Array.isArray(body.items) || body.items.length > 2000) return sendJson(res, 400, { message: 'Dữ liệu không hợp lệ.' });
    const items = await mediaStore.externalize(body.items.map(cleanItem).filter(Boolean));
    await contentCollections.updateOne(
      { _id: adminMatch[1] },
      { $set: { items, updatedAt: new Date(), updatedBy: getSession(req).username } },
      { upsert: true }
    );
    contentCache.delete(adminMatch[1]);
    return sendJson(res, 200, { items });
  }
  return sendJson(res, 404, { message: 'Không tìm thấy API.' });
}

const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon' };
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
    if (url.pathname.startsWith('/api/')) return await handleApi(req, res, url);
    let requested = decodeURIComponent(url.pathname);
    if (requested === '/') requested = '/index.html';
    const staticRoot = requested.startsWith('/assets/') ? assetDir : distDir;
    const relative = requested.startsWith('/assets/') ? requested.slice('/assets'.length) : requested;
    const target = path.resolve(staticRoot, `.${relative}`);
    const insideDist = target.startsWith(staticRoot + path.sep);
    const isFile = insideDist && existsSync(target) && statSync(target).isFile();
    if (!isFile && (requested.startsWith('/assets/') || path.extname(requested))) {
      res.writeHead(404, { 'Cache-Control': 'no-store', 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Not found');
    }
    const safeTarget = isFile ? target : path.join(distDir, 'index.html');
    const ext = path.extname(safeTarget).toLowerCase();
    res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream', 'Cache-Control': ext === '.html' ? 'no-cache' : requested.startsWith('/assets/') ? 'public, max-age=31536000, immutable' : 'public, max-age=3600' });
    createReadStream(safeTarget).pipe(res);
  } catch (error) {
    const status = error.message === 'PAYLOAD_TOO_LARGE' ? 413 : 500;
    sendJson(res, status, { message: status === 413 ? 'Dữ liệu vượt quá giới hạn 12 MB.' : 'Lỗi máy chủ.' });
  }
});

server.listen(port, '0.0.0.0', () => console.log(`Ocean LDP listening on :${port}`));

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, async () => {
    await mongoClient.close().catch(() => {});
    server.close(() => process.exit(0));
  });
}
