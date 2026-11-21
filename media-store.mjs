import crypto from 'node:crypto';
import sharp from 'sharp';

const dataImage = /data:image\/(?:png|jpe?g|webp|gif|avif);base64,[a-z0-9+/=]+/gi;

export function createMediaStore(database) {
  const collection = database.collection('media_assets');
  const pending = new Map();
  async function store(data) {
    const id = crypto.createHash('sha256').update(data).digest('hex');
    const url = `/api/media/${id}`;
    if (!pending.has(id)) pending.set(id, (async () => {
      if (await collection.findOne({ _id: id }, { projection: { _id: 1 } })) return url;
      const input = Buffer.from(data.slice(data.indexOf(',') + 1), 'base64');
      // Persist originals quickly; decode only images actually requested by a visitor.
      const bytes = input;
      const mime = data.slice(5, data.indexOf(';')).replace('image/jpg', 'image/jpeg');
      try { await collection.insertOne({ _id: id, bytes, mime, createdAt: new Date() }); }
      catch (error) { if (error.code !== 11000) throw error; }
      return url;
    })().finally(() => pending.delete(id)));
    return pending.get(id);
  }
  async function externalize(value) {
    if (typeof value === 'string') {
      // Work sequentially so a large legacy collection cannot decode all images at once.
      let result = '', offset = 0;
      for (const match of value.matchAll(new RegExp(dataImage))) {
        result += value.slice(offset, match.index) + await store(match[0]);
        offset = match.index + match[0].length;
      }
      return result + value.slice(offset);
    }
    if (Array.isArray(value)) { const items = []; for (const item of value) items.push(await externalize(item)); return items; }
    if (value && typeof value === 'object') {
      const result = {};
      for (const [key, item] of Object.entries(value)) result[key] = await externalize(item);
      return result;
    }
    return value;
  }
  const optimizing = new Map();
  async function serve(req, res, id) {
    let item = await collection.findOne({ _id: id });
    if (!item) { res.writeHead(404, { 'Cache-Control': 'no-store' }); return res.end(); }
    if (!item.optimized) {
      if (!optimizing.has(id)) optimizing.set(id, (async () => {
        const input = Buffer.isBuffer(item.bytes) ? item.bytes : Buffer.from(item.bytes.buffer);
        try {
          const metadata = await sharp(input, { limitInputPixels: 40_000_000 }).metadata();
          let bytes = input, mime = item.mime;
          if (!(metadata.pages > 1)) {
            const pipeline = sharp(input, { limitInputPixels: 40_000_000 }).rotate().resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true });
            bytes = await (metadata.hasAlpha ? pipeline.png({ palette: true, quality: 90 }) : pipeline.jpeg({ quality: 82, progressive: true, mozjpeg: true })).toBuffer();
            mime = metadata.hasAlpha ? 'image/png' : 'image/jpeg';
          }
          await collection.updateOne({ _id: id }, { $set: { bytes, mime, optimized: true } });
          return { ...item, bytes, mime, optimized: true };
        } catch {
          // A malformed legacy image must not prevent other content from loading.
          return item;
        }
      })().finally(() => optimizing.delete(id)));
      item = await optimizing.get(id);
    }
    const headers = { 'Content-Type': item.mime, 'Cache-Control': 'public, max-age=31536000, immutable', ETag: `"${id}"`, 'X-Content-Type-Options': 'nosniff' };
    if (req.headers['if-none-match'] === headers.ETag) { res.writeHead(304, headers); return res.end(); }
    const bytes = Buffer.isBuffer(item.bytes) ? item.bytes : Buffer.from(item.bytes.buffer);
    res.writeHead(200, { ...headers, 'Content-Length': bytes.length });
    res.end(req.method === 'HEAD' ? undefined : bytes);
  }
  return { externalize, serve };
}
