const variants = new Map<string, string>();
function absolute(source: string): string {
  return typeof document === 'undefined' ? source : new URL(source, document.baseURI).href;
}
export function registerImageVariant(original: string, mobile: string): void {
  variants.set(absolute(original), mobile);
}
export function getImageVariant(original?: string): string | undefined {
  if (!original) return undefined;
  try { return variants.get(absolute(original)); } catch { return undefined; }
}
