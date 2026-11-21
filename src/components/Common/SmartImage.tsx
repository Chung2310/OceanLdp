import React, { useState } from 'react';

const fallback = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360"><rect width="640" height="360" fill="#f1f5f9"/><text x="320" y="180" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="20">Ảnh chưa khả dụng</text></svg>');

export default function SmartImage({ src, srcSet, onError, loading = 'lazy', decoding = 'async', ...props }: React.ImgHTMLAttributes<HTMLImageElement>): JSX.Element {
  const [failed, setFailed] = useState<string | null>(null);
  const broken = Boolean(src) && failed === src;
  return <img {...props} src={broken ? fallback : src} srcSet={broken ? undefined : srcSet} loading={loading} decoding={decoding} onError={event => {
    if (!broken && src) setFailed(src);
    onError?.(event);
  }} />;
}
