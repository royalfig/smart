import '../../scss/style.scss';
import setTabIndex from './setTabIndex';
import colorMode from './colorModeToggle';
import modalFn from './modal';
import search from './search';
import toast from './toast';
import 'lazysizes';

setTabIndex();
colorMode();
modalFn();

// eslint-disable-next-line no-undef
if (typeof SEARCH_API !== 'undefined') {
  search();
}

toast();
