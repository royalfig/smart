import { toggleColorMode } from './colorModeToggle';
import copyToClipboard from './copy';
import { save } from './saves';

function handleClick(e) {
  if (e.target.closest('.sm-navbar-menu-button')) {
    document
      .querySelector('.sm-nav-menu-container')
      .classList.add('sm-show-menu');
  }

  if (e.target.closest('.sm-love-button')) {
    save(e.target.closest('.sm-love-button'));
    // e.target.closest('.sm-love-button').classList.toggle('sm-love-toggle');
    return;
  }

  if (e.target.closest('.sm-nav-menu-close-button')) {
    document
      .querySelector('.sm-nav-menu-container')
      .classList.remove('sm-show-menu');
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
    return;
  }

  if (
    e.target.closest('.sm-saves-button') ||
    e.target.closest('.sm-navbar-close-saves')
  ) {
    document
      .querySelector('.sm-navbar-saves')
      .classList.toggle('sm-show-saves');
  }
}

export default function eventHandler() {
  document.body.addEventListener('click', handleClick);
}
