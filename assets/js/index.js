import '../scss/style.scss';
import search from './search';
import modalFn from './modal';
import toast from './toast';

import 'lazysizes';

// Polyfill forEach
// TODO Needed?
// if (window.NodeList && !NodeList.prototype.forEach) {
//   NodeList.prototype.forEach = Array.prototype.forEach;
// }

// eslint-disable-next-line no-undef
if (typeof SEARCH_API !== 'undefined') {
  search();
}

modalFn();
toast();
/*
 * Grid styles
 * * Counts & adds the number of items to the grid container
 */
const gridContainers = document.querySelectorAll('.grid-container');

gridContainers.forEach((element) => {
  const gridItems = element.querySelectorAll('.card');

  element.classList.add(`grid-container-${gridItems.length}`);
});

/*
 * Color mode toggle
 * ? Is the color mode button hidden on unsupported browsers?
 */
const toggleColorBtns = document.querySelectorAll('.color-mode-btn');

if (window.CSS && CSS.supports('color', 'var(--primary)')) {
  const toggleColorMode = (e) => {
    if (e.currentTarget.classList.contains('light')) {
      document.documentElement.setAttribute('color-mode', 'light');
      localStorage.setItem('pref', 'light');
      return;
    }
    document.documentElement.setAttribute('color-mode', 'dark');
    localStorage.setItem('pref', 'dark');
  };
  toggleColorBtns.forEach((btn) => {
    btn.addEventListener('click', toggleColorMode);
  });
} else {
  toggleColorBtns.forEach((e) => {
    e.style.display = 'none';
  });
}

/*
 * Remove menu nav links from the DOM
 */
const menuNavLinks = document.querySelectorAll('#menu a');

menuNavLinks.forEach((el) => el.setAttribute('tabindex', '-1'));
