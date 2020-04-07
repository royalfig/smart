import './scss/style.scss';
import search from './js/search';

import 'lazysizes';

// Polyfill forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

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
const toggleColorMode = (e) => {
  if (e.currentTarget.classList.contains('light')) {
    document.documentElement.setAttribute('color-mode', 'light');
    localStorage.setItem('pref', 'light');
    return;
  }
  document.documentElement.setAttribute('color-mode', 'dark');
  localStorage.setItem('pref', 'dark');
};

const toggleColorButtons = document.querySelectorAll('.color-mode-btn');

toggleColorButtons.forEach((btn) => {
  btn.addEventListener('click', toggleColorMode);
});

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
//-------------------------------------------
// Mobile Nav Menu
//-------------------------------------------
const mobileSearchBtn = document.querySelector('.navbar-mobile__search-btn');
const navSearchBtn = document.querySelector('.navbar__right-item--search');
const hamburgerBtn = document.querySelector('.navbar-mobile__hamburger-btn');
const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const mobileNavMenuCloseBtn = document.querySelector(
  '.mobile-nav-menu__close-btn'
);
const modalSearch = document.querySelector('.modal-search');
const modalSearchCloseBtn = document.querySelector('.modal-search__close-btn');

if (typeof SEARCH_API !== 'undefined') {
  mobileSearchBtn.style.display = 'block';
  navSearchBtn.style.display = 'block';
}

const btns = [
  mobileSearchBtn,
  navSearchBtn,
  hamburgerBtn,
  modalSearchCloseBtn,
  mobileNavMenuCloseBtn
];

const closeMenu = (input, target) => {
  document.body.classList.remove(`expanded-${target}`);
  input.setAttribute('aria-expanded', 'false');
  input.setAttribute('aria-hidden', 'true');
};

const openMenu = (input, target) => {
  if (document.body.classList.contains('expanded-menu')) {
    closeMenu(mobileNavMenu, 'menu');
  }
  if (document.body.classList.contains('expanded-modal-search')) {
    closeMenu(modalSearch, 'modal-search');
  }

  if (target === 'modal-search') {
    document.getElementById('search-input').focus();
  } else {
    mobileNavMenuCloseBtn.focus();
  }

  document.body.classList.add(`expanded-${target}`);
  input.setAttribute('aria-expanded', 'true');
  input.setAttribute('aria-hidden', 'false');

  const closeAll = (input) => {
    const wrapper = document.querySelector('.content-wrap');
    if (input.target === wrapper) {
      closeMenu(mobileNavMenu, 'menu');
      closeMenu(modalSearch, 'modal-search');
      document.body.removeEventListener('click', closeAll);
    }
  };

  document.body.addEventListener('click', closeAll);
};

const closeByEsc = (key) => {
  if (key.key === 'Escape') {
    closeMenu(mobileNavMenu, 'menu');
    closeMenu(modalSearch, 'modal-search');
  }
};

document.body.addEventListener('keyup', closeByEsc);

btns.forEach((item) => {
  item.addEventListener('click', (e) => {
    const { target } = e.currentTarget.dataset;
    const targetEl = document.getElementById(target);
    if (targetEl.getAttribute('aria-expanded') === 'false') {
      return openMenu(targetEl, target);
    }
    return closeMenu(targetEl, target);
  });
});
