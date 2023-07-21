import '../../css/index.css';

import initClickHandler from './clickHandler';
import { determineColorModeSupport } from './colorModeToggle';
import keyClickHandler from './keyHandler';
import generatePagination from './pagination';
import initMediumZoom from './medium_zoom';
import responsiveTableInit from './responsiveTables';
import writeAuthorWebsite from './authorWebsite';
import toc from './toc';
import animateOnScroll from './homePageAnimation';
import toggleShareMenu from './toggleShareMenu';

initClickHandler();
determineColorModeSupport();
generatePagination();
keyClickHandler();
initMediumZoom();
responsiveTableInit();
writeAuthorWebsite();
toc();
animateOnScroll();
toggleShareMenu();
