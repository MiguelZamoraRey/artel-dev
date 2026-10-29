import { progressFor } from '../lib/draw';

const plate = document.querySelector<HTMLElement>('[data-scroll-plate]');

if (plate && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  plate.classList.add('is-armed');

  let armed = false;
  let frame = 0;

  const update = () => {
    frame = 0;
    const rect = plate.getBoundingClientRect();
    plate.style.setProperty('--draw', progressFor(rect.top, rect.height, innerHeight).toFixed(4));
  };

  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };

  const listen = (on: boolean) => {
    if (on) {
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
    } else {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    }
  };

  new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (!entry || entry.isIntersecting === armed) return;
    armed = entry.isIntersecting;
    listen(armed);
    if (armed) onScroll();
  }, { rootMargin: '20% 0px' }).observe(plate);
}
