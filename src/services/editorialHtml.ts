import { useEffect, useMemo, useRef } from 'react';
import { getImageVariant } from './imageVariants';

// Editorial HTML bypasses React image components, so defer its URLs explicitly.
export function useEditorialHtml(html: string = '') {
  const ref = useRef<HTMLDivElement>(null);
  const content = useMemo(() => {
    const template = document.createElement('template');
    template.innerHTML = html;
    template.content.querySelectorAll('img, picture source').forEach(element => {
      for (const attribute of ['src', 'srcset']) {
        const value = element.getAttribute(attribute);
        if (value) { element.setAttribute('data-deferred-' + attribute, value); element.removeAttribute(attribute); }
      }
      if (element instanceof HTMLImageElement) {
        element.decoding = 'async';
        element.style.maxWidth = '100%';
        element.style.height = 'auto';
      }
    });
    return template.innerHTML;
  }, [html]);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const restore = (element: Element) => {
      const original = element.getAttribute('data-deferred-src');
      const mobile = window.matchMedia('(max-width: 767px)').matches && getImageVariant(original);
      for (const attribute of ['srcset', 'src']) {
        const value = element.getAttribute('data-deferred-' + attribute);
        if (value && !(attribute === 'srcset' && mobile)) element.setAttribute(attribute, attribute === 'src' && mobile ? mobile : value);
        element.removeAttribute('data-deferred-' + attribute);
      }
    };
    const reveal = (image: Element) => {
      image.closest('picture')?.querySelectorAll('source').forEach(restore);
      image.setAttribute('loading', 'eager');
      restore(image);
    };
    const images = root.querySelectorAll('img');
    if (!('IntersectionObserver' in window)) { images.forEach(reveal); return; }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { reveal(entry.target); observer.unobserve(entry.target); }
      });
    }, { rootMargin: '200px 0px' });
    images.forEach(image => observer.observe(image));
    return () => observer.disconnect();
  }, [content]);
  return { html: content, ref };
}
