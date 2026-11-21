import { useMemo } from 'react';

// Editorial HTML does not go through SmartImage. Normalize its image loading too.
export function useEditorialHtml(html: string = ''): string {
  return useMemo(() => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    doc.querySelectorAll('img').forEach(image => {
      image.loading = 'lazy';
      image.decoding = 'async';
      image.style.maxWidth = '100%';
      image.style.height = 'auto';
    });
    return doc.body.innerHTML;
  }, [html]);
}
