import { useEffect, useRef, useState } from 'react';

export function useNearViewport<T extends Element>() {
  const ref = useRef<T>(null);
  const [nearViewport, setNearViewport] = useState(false);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) { setNearViewport(true); return; }
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { setNearViewport(true); observer.disconnect(); }
    }, { rootMargin: '200px 0px' });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, nearViewport };
}
