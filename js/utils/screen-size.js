export function getScreenSize() {
  const width = window.innerWidth;

  if (width < 768) return 'mobile';
  if (width < 1280) return 'tablet';
  return 'desktop';
}
