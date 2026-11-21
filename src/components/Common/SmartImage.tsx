import React, { useEffect, useRef, useState } from 'react';
import { getImageVariant } from '../../services/imageVariants';

const fallback = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="640" height="360" viewBox="0 0 640 360"><rect width="640" height="360" fill="#f1f5f9"/><text x="320" y="180" text-anchor="middle" fill="#64748b" font-family="sans-serif" font-size="20">Ảnh chưa khả dụng</text></svg>');
type Props = React.ImgHTMLAttributes<HTMLImageElement> & { mobileSrc?: string; defer?: boolean };

export default function SmartImage({ src, srcSet, mobileSrc, defer = false, onError, loading = 'lazy', decoding = 'async', ...props }: Props): JSX.Element {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches);
  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobile(media.matches);
    update();
    if (media.addEventListener) { media.addEventListener('change', update); return () => media.removeEventListener('change', update); }
    media.addListener(update); return () => media.removeListener(update);
  }, []);
  const image = useRef<HTMLImageElement>(null);
  const [nearViewport, setNearViewport] = useState(loading === 'eager');
  const [failed, setFailed] = useState<string | null>(null);
  const broken = Boolean(src) && failed === src;
  const enabled = !defer && (loading === 'eager' || nearViewport);
  const mobile = mobileSrc || getImageVariant(src);
  const selectedSrc = isMobile && mobile ? mobile : src;

  useEffect(() => {
    if (enabled || defer) return;
    if (!('IntersectionObserver' in window)) { setNearViewport(true); return; }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setNearViewport(true);
        observer.disconnect();
      }
    }, { rootMargin: '200px 0px' });
    if (image.current) observer.observe(image.current);
    return () => observer.disconnect();
  }, [enabled, defer]);

  // Assign one URL at mount: Safari can request img.src before a picture source attaches.
  // Withhold URLs below the viewport so native lazy-loading heuristics cannot overfetch.
  return <img {...props} ref={image} src={enabled ? (broken ? fallback : selectedSrc) : undefined} srcSet={enabled && !broken && !(isMobile && mobile) ? srcSet : undefined} loading="eager" decoding={decoding} onError={event => {
    if (!broken && src) setFailed(src);
    onError?.(event);
  }} />;
}
