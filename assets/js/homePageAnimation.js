export default function animateOnScroll() {
  // Fade in elements on scroll
  const els = document.querySelectorAll('.sm-home-grid > *');

  if (!els) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        const ratio = entry.intersectionRatio;

        // remove from observation
        if (ratio >= 0.6) {
          el.style.opacity = 1;
          observer.unobserve(el);
          return;
        }

        const calculatedRatio = (num) => {
          if (num < 0.2) {
            return 0;
          }

          if (num >= 0.6) {
            return 1;
          }

          return ratio;
        };
        el.style.opacity = calculatedRatio(ratio);
      });
    },
    { threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.6, 0.7, 0.8, 0.9, 1] },
  );

  els.forEach((el) => {
    observer.observe(el);
  });
}
