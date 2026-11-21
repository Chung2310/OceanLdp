import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { webkit, devices } from '@playwright/test';

const root = path.resolve('dist');
const mime = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml' };
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  if (url.pathname.startsWith('/api/')) {
    res.setHeader('Content-Type', 'application/json');
    return res.end('{"initialized":false,"items":[]}');
  }
  let file = path.resolve(root, '.' + decodeURIComponent(url.pathname));
  if (!file.startsWith(root + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) file = path.join(root, 'index.html');
  res.setHeader('Content-Type', mime[path.extname(file)] || 'application/octet-stream');
  fs.createReadStream(file).pipe(res);
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
let browser;
try {
  browser = await webkit.launch();
  const page = await browser.newPage({ ...devices['iPhone 13'] });
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  // Keep this regression test independent of Google's font service.
  await page.route(/fonts\.(googleapis|gstatic)\.com/, route => route.abort());
  const requestedImages = [];
  page.on('request', req => { if (req.resourceType() === 'image') requestedImages.push(req.url()); });
  await page.goto(`http://127.0.0.1:${server.address().port}`, { waitUntil: 'domcontentloaded' });
  const hero = page.locator('section[aria-label="Banner Trang Chủ"]');
  await hero.locator('img').first().evaluate(image => image.decode());
  const first = await hero.locator('img').first().getAttribute('src');
  assert.match(first, /banner1-768-/);
  assert.equal(requestedImages.some(url => /banner1-(?!768|mobile)/.test(url)), false, 'no desktop banner downloaded');
  const lead = page.locator('section.bg-cover');
  assert.equal(await lead.evaluate(el => el.style.backgroundImage), '', 'offscreen background deferred');
  const teacher = page.getByAltText('ThS. Nguyễn Xuân Quảng', { exact: true });
  assert.equal(await teacher.getAttribute('src'), null, 'offscreen images have no network URL');
  const tabs = hero.getByRole('tab');
  await tabs.nth(1).click();
  await page.waitForFunction(() => {
    const images = document.querySelectorAll('section[aria-label="Banner Trang Chủ"] img');
    return images[1]?.complete && images[1].naturalWidth > 0 && images[1].parentElement.className.includes('opacity-100');
  });
  await lead.scrollIntoViewIfNeeded();
  await page.waitForFunction(() => document.querySelector('section.bg-cover').style.backgroundImage.includes('url('));
  await teacher.scrollIntoViewIfNeeded();
  await page.waitForFunction(() => {
    const image = document.querySelector('img[alt="ThS. Nguyễn Xuân Quảng"]');
    return image?.getAttribute('src') && image.complete && image.naturalWidth > 0;
  });
  const source = await teacher.getAttribute('src');
  assert.match(source, /-mobile-/);
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.waitForFunction(() => {
    const image = document.querySelector('img[alt="ThS. Nguyễn Xuân Quảng"]');
    return image?.getAttribute('src') && !image.src.includes('-mobile-') && image.complete && image.naturalWidth > 0;
  });
  await page.setViewportSize({ width: 390, height: 844 });
  const fixtureFile = fs.readdirSync(path.join(root, 'assets')).find(name => /^roadmap-/.test(name) && !name.includes('-mobile-') && name.endsWith('.jpg'));
  const fixtureImage = '/assets/' + fixtureFile;
  await page.route('**/api/content/news/editorial-fixture', route => route.fulfill({ json: { initialized: true, item: { id: 'editorial-fixture', slug: 'editorial-fixture', title: 'Editorial lazy test', content: '<div style="height:3500px">Long article</div><img alt="Editorial deferred fixture" src="' + fixtureImage + '">' } } }));
  const requestsBeforeArticle = requestedImages.filter(url => url.endsWith(fixtureFile)).length;
  await page.goto(`http://127.0.0.1:${server.address().port}/tin-tuc/editorial-fixture`, { waitUntil: 'domcontentloaded' });
  const editorial = page.getByAltText('Editorial deferred fixture', { exact: true });
  await editorial.waitFor({ state: 'attached' });
  assert.equal(await editorial.getAttribute('src'), null, 'editorial image URL withheld until near viewport');
  assert.equal(requestedImages.filter(url => url.endsWith(fixtureFile)).length, requestsBeforeArticle);
  await editorial.scrollIntoViewIfNeeded();
  await page.waitForFunction(() => {
    const image = document.querySelector('img[alt="Editorial deferred fixture"]');
    return image?.getAttribute('src') && image.complete && image.naturalWidth > 0;
  });
  assert.match(await editorial.getAttribute('src'), /-mobile-/);
  assert.deepEqual(errors, []);
  console.log('PASS: iPhone WebKit selects mobile images without desktop duplicates, defers offscreen requests, loads on scroll, switches banners, updates desktop sources on resize, and defers background/editorial images');
} finally {
  await browser?.close();
  server.close();
}
