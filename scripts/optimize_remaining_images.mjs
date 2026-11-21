import path from 'node:path';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const jobs = [
  ...['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'].map((file) => ({
    source: `src/asset/teachers/${file}`,
    outputDir: 'src/asset/teachers/optimized',
    widths: [384, 768]
  })),
  ...['course01.png', 'course02.png', 'course03.png'].map((file) => ({
    source: `src/asset/courses/${file}`,
    outputDir: 'src/asset/courses/optimized',
    widths: [480, 768, 960]
  })),
  ...Array.from({ length: 6 }, (_, index) => ({
    source: `src/asset/reasons/home-reason${String(index + 1).padStart(2, '0')}.png`,
    outputDir: 'src/asset/reasons/optimized',
    widths: [480, 768, 960]
  })),
  ...['reason02.png', 'reason03.png', 'reason06.png'].map((file) => ({
    source: `src/asset/reasons/${file}`,
    outputDir: 'src/asset/reasons/optimized',
    widths: [480, 768, 960]
  })),
  {
    source: 'src/asset/banner/banner3.png',
    outputDir: 'src/asset/banner/optimized',
    widths: [480, 768, 1280, 1920]
  },
  {
    source: 'src/asset/branches/banner_scholarship.png',
    outputDir: 'src/asset/branches/optimized',
    widths: [480, 768, 1280]
  },
  {
    source: 'src/asset/img/roadmap/roadmap.png',
    outputDir: 'src/asset/img/roadmap/optimized',
    widths: [480, 768, 960, 1280]
  },
  {
    source: 'src/asset/poster/img.png',
    outputDir: 'src/asset/poster/optimized',
    widths: [480, 768, 960, 1280]
  },
  ...['msutong_socap.jpg', 'msutong_trungcap.jpg', 'msutong_caocap.jpg'].map((file) => ({
    source: `src/asset/books/${file}`,
    outputDir: 'src/asset/books/optimized',
    widths: [384, 640, 960]
  })),
  ...['photo_thien_tai.png', 'photo_dong_chi.png'].map((file) => ({
    source: `src/asset/library/${file}`,
    outputDir: 'src/asset/library/optimized',
    widths: [480, 768, 1024]
  }))
];

sharp.cache(false);

for (const job of jobs) {
  const sourcePath = path.join(projectRoot, job.source);
  const outputDir = path.join(projectRoot, job.outputDir);
  const metadata = await sharp(sourcePath).metadata();
  const widths = [...new Set(job.widths.map((width) => Math.min(width, metadata.width || width)))];
  const name = path.parse(sourcePath).name;
  await mkdir(outputDir, { recursive: true });

  for (const width of widths) {
    const outputPath = path.join(outputDir, `${name}-${width}.webp`);
    const result = await sharp(sourcePath)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 78, effort: 4, smartSubsample: true })
      .toFile(outputPath);

    console.log(`${path.relative(projectRoot, outputPath)}: ${result.width}x${result.height}, ${(result.size / 1024).toFixed(1)} KB`);
  }
}
