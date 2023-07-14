import { toggleColorMode } from './colorModeToggle';
import copyToClipboard from './copy';

function handleClick(e) {
  if (e.target.closest('.sm-navbar-menu-button')) {
    const navbarBtn = document.querySelector('.sm-navbar-menu-button');
    const navMenu = document.querySelector('.sm-nav-menu');
    navMenu.classList.toggle('sm-show-nav-menu');
    if (navbarBtn.getAttribute('aria-expanded') === 'false') {
      navbarBtn.setAttribute('aria-expanded', 'true');
      return;
    }
    navbarBtn.setAttribute('aria-expanded', 'false');

    return;
  }

  if (e.target.closest('.sm-copy-button')) {
    copyToClipboard(e.target.closest('.sm-copy-button'));
    return;
  }

  if (e.target.closest('.sm-dark-mode')) {
    toggleColorMode('dark');
    return;
  }

  if (e.target.closest('.sm-light-mode')) {
    toggleColorMode('light');
  }
}

export default function eventHandler() {
  document.body.addEventListener('click', handleClick);
}
