import './scss/style.scss';
import search from './js/search';
import modalFn from './js/modal';

import 'lazysizes';

// Polyfill forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// eslint-disable-next-line no-undef
if (SEARCH_API) {
  search();
}

modalFn();

//-------------------------------------------
// Grid Styles
//-------------------------------------------

const gridContainers = document.querySelectorAll('.grid-container-home');

gridContainers.forEach((element) => {
  const gridItems = element.querySelectorAll('.card');

  element.classList.add(`grid-container-home-${gridItems.length}`);
});

//-------------------------------------------
// Color Mode Toggle
//-------------------------------------------
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
