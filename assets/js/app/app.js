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
        el.style.opacity = ratio > 0.5 ? ratio + 0.25 : ratio - 0.5;
      });
    },
    { threshold: [0, 0.25, 0.5, 0.75, 1] },
  );

  els.forEach((el) => {
    observer.observe(el);
  });
}

animateOnScroll();
