import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir } from 'node:fs/promises';
import sharp from 'sharp';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(projectRoot, 'src', 'asset', 'banner');
const outputDir = path.join(sourceDir, 'optimized');
const banners = ['banner1.png', 'banner2.png', 'banner-1311.png', 'banner4.png'];
const widths = [480, 768, 1280, 1920];

sharp.cache(false);

for (const banner of banners) {
  const sourcePath = path.join(sourceDir, banner);
  const name = path.parse(banner).name;
  const metadata = await sharp(sourcePath).metadata();
  const targetWidths = [...new Set(widths.map((width) => Math.min(width, metadata.width || width)))];

  for (const width of targetWidths) {
    const outputPath = path.join(outputDir, `${name}-${width}.webp`);
    const result = await sharp(sourcePath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78, effort: 4, smartSubsample: true })
      .toFile(outputPath);

    console.log(`${path.basename(outputPath)}: ${result.width}x${result.height}, ${(result.size / 1024).toFixed(1)} KB`);
  }
}

const posterSource = path.join(projectRoot, 'src', 'asset', 'poster', 'background.png');
const posterOutputDir = path.join(projectRoot, 'src', 'asset', 'poster', 'optimized');
await mkdir(posterOutputDir, { recursive: true });
const poster = await sharp(posterSource)
  .resize({ width: 1920, withoutEnlargement: true })
  .webp({ quality: 78, effort: 4, smartSubsample: true })
  .toFile(path.join(posterOutputDir, 'background-1920.webp'));

console.log(`background-1920.webp: ${poster.width}x${poster.height}, ${(poster.size / 1024).toFixed(1)} KB`);
