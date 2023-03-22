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
