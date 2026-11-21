import path from 'node:path';
import sharp from 'sharp';

// Keep original source files; only emit optimized, content-hashed production assets.
export default function optimizedImages() {
  return {
    name: 'optimized-images',
    enforce: 'pre',
    apply: 'build',
    async load(id) {
      const [file, query = ''] = id.split('?');
      if (!/[/\\]src[/\\]asset[/\\]/.test(file) || !/\.(png|jpe?g|webp)$/i.test(file)) return null;
      if (query && !/^width=\d+$/.test(query)) return null;
      const requestedWidth = Number(new URLSearchParams(query).get('width'));
      const maxSize = requestedWidth || (/[/\\]teachers[/\\]/.test(file) ? 800 : 1920);
      const metadata = await sharp(file).metadata();
      const image = sharp(file).rotate().resize({ width: maxSize, height: maxSize, fit: 'inside', withoutEnlargement: true });
      // JPEG/PNG also work on older iOS; retain alpha for cutouts.
      const extension = metadata.hasAlpha ? 'png' : 'jpg';
      const source = await (metadata.hasAlpha
        ? image.png({ palette: true, quality: 90, compressionLevel: 9 })
        : image.jpeg({ quality: 82, progressive: true, mozjpeg: true })).toBuffer();
      const name = `${path.basename(file, path.extname(file))}${requestedWidth ? `-${requestedWidth}` : ''}.${extension}`;
      const reference = this.emitFile({ type: 'asset', name, source });
      if (!requestedWidth && (metadata.autoOrient?.width || metadata.width) > 768) {
        const small = sharp(file).rotate().resize({ width: 768, height: 768, fit: 'inside', withoutEnlargement: true });
        const mobileSource = await (metadata.hasAlpha
          ? small.png({ palette: true, quality: 85, compressionLevel: 9 })
          : small.jpeg({ quality: 78, progressive: true, mozjpeg: true })).toBuffer();
        const mobileReference = this.emitFile({ type: 'asset', name: path.basename(file, path.extname(file)) + '-mobile.' + extension, source: mobileSource });
        return `import { registerImageVariant } from '/src/services/imageVariants.ts';
          const original = import.meta.ROLLUP_FILE_URL_${reference};
          registerImageVariant(original, import.meta.ROLLUP_FILE_URL_${mobileReference});
          export default original;`;
      }
      return `export default import.meta.ROLLUP_FILE_URL_${reference};`;
    }
  };
}
