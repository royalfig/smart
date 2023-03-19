import '../../css/app/index.css';

import initClickHandler from './clickHandler';
import animateNavbar from './navbarAnimation';
import { determineColorModeSupport } from './colorModeToggle';
import keyClickHandler from './keyHandler';
import generatePagination from './pagination';
import { Saves } from './saves';

initClickHandler();
// animateNavbar();
determineColorModeSupport();
generatePagination();
keyClickHandler();
new Saves().init();
