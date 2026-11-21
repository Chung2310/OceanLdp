import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import vm from 'node:vm';
import crypto from 'node:crypto';
import sharp from 'sharp';
import { Binary } from 'mongodb';
import ts from 'typescript';
import { createMediaStore } from '../media-store.mjs';

const media = new Map();
const raw = await sharp({ create: { width: 2400, height: 1200, channels: 3, background: '#1b7e45' } }).png().toBuffer();
const data = 'data:image/png;base64,' + raw.toString('base64');
const documents = new Map([['news', { items: [{ id: 'one', slug: 'first-post', title: 'First', image: data, content: `<p>Body</p><img src="${data}">` }, { id: 'two', slug: 'second-post', content: '<p>Second</p>' }] }]]);
let contentReads = 0;
const contentCollections = {
  async findOne({ _id }) { contentReads++; return documents.get(_id); },
  async updateOne({ _id }, { $set }) { documents.set(_id, $set); }
};
const collection = {
  async findOne({ _id }) { return media.get(_id); },
  async insertOne(item) { media.set(item._id, { ...item, bytes: new Binary(item.bytes) }); },
  async updateOne({ _id }, { $set }) { media.set(_id, { ...media.get(_id), ...$set, bytes: new Binary($set.bytes) }); }
};
const database = { collection: () => collection };
const source = fs.readFileSync('server.mjs', 'utf8');
const bootstrap = source.slice(source.indexOf('const mediaStore ='), source.indexOf('await adminAccounts.createIndex'));
const handlers = source.slice(source.indexOf('function sendJson'), source.indexOf('server.listen('));
const sessionSecret = 'test-session-secret-at-least-24-characters';
const sessions = new Map([['session', { username: 'admin', expiresAt: Date.now() + 60000 }]]);
fs.mkdirSync('scratch', { recursive: true });
const retainedAssets = path.resolve(fs.mkdtempSync(path.join(path.resolve('scratch'), 'performance-')));
fs.writeFileSync(path.join(retainedAssets, 'old-release.js'), '/* retained release */');
const context = { http, path, crypto, Buffer, URL, database, contentCollections, createMediaStore, sessions, sessionSecret, loginAttempts: new Map(), distDir: path.resolve('dist'), assetDir: retainedAssets, existsSync: fs.existsSync, statSync: fs.statSync, createReadStream: fs.createReadStream, console };
vm.createContext(context);
vm.runInContext(bootstrap + handlers + '\nglobalThis.testServer = server;', context);
const server = context.testServer;
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;
const token = 'session.' + crypto.createHmac('sha256', sessionSecret).update('session').digest('base64url');
try {
 const list = await (await fetch(base + '/api/content/news?view=summary')).json();
 assert.equal(list.items.length, 2);
 assert.equal(list.items[0].content, undefined);
 assert.match(list.items[0].image, /^\/api\/media\/[a-f0-9]{64}$/);
 assert.equal(media.size, 1, 'same thumbnail and editorial image deduplicated');
 assert(!JSON.stringify(list).includes('base64'));
 const reads = contentReads;
 const detail = await (await fetch(base + '/api/content/news/first-post')).json();
 assert.match(detail.item.content, /<p>Body<\/p>/);
 assert(!detail.item.content.includes('base64'));
 assert.equal(contentReads, reads, 'server cache reused');
 const image = await fetch(base + list.items[0].image);
 assert.equal(image.status, 200);
 assert.equal(image.headers.get('content-type'), 'image/jpeg');
 const bytes = Buffer.from(await image.arrayBuffer());
 const dimensions = await sharp(bytes).metadata();
 assert.equal(dimensions.width, 1920);
 assert.match(image.headers.get('cache-control'), /immutable/);
 const conditional = await fetch(base + list.items[0].image, { headers: { 'If-None-Match': image.headers.get('etag') } });
 assert.equal(conditional.status, 304);
 const head = await fetch(base + list.items[0].image, { method: 'HEAD' });
 assert.equal(Number(head.headers.get('content-length')), bytes.length);
 assert.equal((await head.arrayBuffer()).byteLength, 0);
 const anonymous = await fetch(base + '/api/admin/content/news');
 assert.equal(anonymous.status, 401);
 const admin = await (await fetch(base + '/api/admin/content/news', { headers: { Cookie: 'ocean_admin=' + token } })).json();
 assert.match(admin.items[0].content, /Body/);
 const saved = await fetch(base + '/api/admin/content/news', { method: 'PUT', headers: { Cookie: 'ocean_admin=' + token, 'Content-Type': 'application/json' }, body: JSON.stringify({ items: [{ ...admin.items[0], title: 'Updated', image: data }] }) });
 assert.equal(saved.status, 200);
 assert.equal((await saved.json()).items[0].image, list.items[0].image);
 const updated = await (await fetch(base + '/api/content/news?view=summary')).json();
 assert.equal(updated.items[0].title, 'Updated', 'save invalidates server cache');
 const retained = await fetch(base + '/assets/old-release.js');
 assert.equal(retained.status, 200);
 assert.equal(await retained.text(), '/* retained release */');
 assert.match(retained.headers.get('cache-control'), /immutable/);
 const missingDetail = await (await fetch(base + '/api/content/news/unknown')).json();
 assert.equal(missingDetail.item, null);
 for (const url of ['/assets/old-missing.jpg', '/missing.png', '/api/media/' + 'a'.repeat(64)]) assert.equal((await fetch(base + url)).status, 404);
 assert.equal((await fetch(base + '/tin-tuc/first-post')).status, 200);
 console.log('PASS: legacy base64, deduplication, summary/detail, media optimization/BSON/cache/HEAD/304, admin auth/save invalidation, 404 and SPA routes');
} finally { server.close(); }

// Exercise actual client cache logic after TypeScript transpilation, with fetch stubbed.
const clientSource = fs.readFileSync('src/services/contentService.ts', 'utf8');
let requests = 0;
const client = { exports: {}, require: name => name === 'react' ? {} : name.includes('scheduleData') ? { campusScheduleCards: [] } : {}, AbortController, setTimeout, clearTimeout, fetch: async () => { requests++; return { ok: true, json: async () => ({ initialized: true, items: [{ id: 'cached' }] }) }; } };
vm.createContext(client);
vm.runInContext(ts.transpileModule(clientSource, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, client);
await Promise.all([client.exports.fetchContent('news', []), client.exports.fetchContent('news', [])]);
await client.exports.fetchContent('news', []);
assert.equal(requests, 1, 'parallel and repeated client requests deduplicated');
console.log('PASS: client request deduplication and 30s cache');
const images = fs.readdirSync('dist/assets').filter(name => /\.(png|jpe?g|webp)$/.test(name));
for (const name of images) { const m = await sharp(path.join('dist/assets', name)).metadata(); assert(m.width <= 1920 && m.height <= 1920, name); }
console.log(`PASS: ${images.length} built images decode within size limits`);
