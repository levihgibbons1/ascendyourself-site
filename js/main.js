/* ─────────────────────────────────────────
   ASCEND AI  ·  ascendyourself.com
   ───────────────────────────────────────── */

/* ── Scroll-in animation for cards / steps ── */
const animatedEls = document.querySelectorAll('.feature-card, .step');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // stagger each element within its parent grid
          const siblings = Array.from(entry.target.parentElement.children);
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${idx * 80}ms`;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  animatedEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: show all immediately
  animatedEls.forEach((el) => el.classList.add('visible'));
}

/* ── Smooth scroll for in-page anchors ── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
