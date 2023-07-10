import '../../css/index.css';

import initClickHandler from './clickHandler';
import { determineColorModeSupport } from './colorModeToggle';
import keyClickHandler from './keyHandler';
import generatePagination from './pagination';
import { Saves } from './saves';
import initMediumZoom from './medium_zoom';
import responsiveTableInit from './responsiveTables';
import writeAuthorWebsite from './authorWebsite';
import toc from './toc';

initClickHandler();
determineColorModeSupport();
generatePagination();
keyClickHandler();
new Saves().init();
initMediumZoom();
responsiveTableInit();
writeAuthorWebsite();
toc();

function animateOnScroll() {
  // Fade in elements on scroll
  const els = document.querySelectorAll('.sm-grid-home > *');

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

animateOnScroll();
