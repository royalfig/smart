import './scss/style.scss';
import search from './js/search';
import modal from './js/modal';

import 'lazysizes';

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

if (SEARCH_API) {
  search();
}

// Polyfill forEach

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

// animate navbar on desktop
const siteTitles = document.querySelectorAll('.site-title');
const hero = document.querySelector('.hero');
let scrollPosHero = 0;
let tickingHero = false;

const animateNav = (pos) => {
  if (pos > hero.offsetHeight + 25) {
    siteTitles.forEach((item) => item.classList.add('show-nav'));
  } else {
    siteTitles.forEach((item) => item.classList.remove('show-nav'));
  }
};

if (hero !== null) {
  window.addEventListener('scroll', () => {
    scrollPosHero = window.scrollY;

    if (!tickingHero) {
      window.requestAnimationFrame(() => {
        animateNav(scrollPosHero);
        tickingHero = false;
      });

      tickingHero = true;
    }
  });
}
