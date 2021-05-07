import '../../scss/style.scss';
import setTabIndex from './setTabIndex';
import colorMode from './colorModeToggle';
import grid from './grid';
import modalFn from './modal';
import search from './search';
import 'lazysizes';

setTabIndex();
grid();
colorMode();
modalFn();

// eslint-disable-next-line no-undef
if (typeof SEARCH_API !== 'undefined') {
  search();
}
