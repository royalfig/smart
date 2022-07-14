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
    e.target.closest('.sm-love-button').classList.toggle('sm-love-toggle');
    return;
  }

  if (e.target.closest('.sm-nav-menu-close-button')) {
    document
      .querySelector('.sm-nav-menu-container')
      .classList.remove('sm-show-menu');
  }

  // if (e.target.closest('.sm-search-button')) {
  //   document.querySelector('.sm-search').classList.add('sm-show-search');
  //   document.querySelector('#sm-search-input').focus();
  //   return;
  // }

  // if (e.target.closest('.sm-search-form-close-button')) {
  //   document.querySelector('.sm-search').classList.remove('sm-show-search');
  //   return;
  // }

  // if (e.target.closest('.sm-clear-search-button')) {
  //   document.querySelector('.sm-search-form input').value = '';
  //   document.querySelector('.sm-search-results-container').innerHTML = '';
  //   document
  //     .querySelector('.sm-clear-search-button')
  //     .classList.remove('sm-show-clear-button');
  //   document.querySelector('.sm-search-form input').focus();
  //   return;
  // }

  if (e.target.closest('.sm-copy-button')) {
    copyToClipboard();
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

  if (e.target.closest('.sm-follow-button')) {
    document.querySelector('.sm-overflow-buttons').classList.add('sm-hide');
    document.querySelector('.sm-overflow-follow').classList.add('sm-show');
    return;
  }

  if (e.target.closest('.sm-share-button')) {
    document.querySelector('.sm-overflow-buttons').classList.add('sm-hide');
    document.querySelector('.sm-overflow-share').classList.add('sm-show');
    return;
  }

  if (e.target.closest('.sm-saves-button')) {
    document.querySelector('.sm-overflow-buttons').classList.add('sm-hide');
    document.querySelector('.sm-overflow-saves').classList.add('sm-show');
    return;
  }

  if (e.target.closest('.sm-overflow-back')) {
    e.target
      .closest('.sm-overflow-back')
      .parentElement.classList.remove('sm-show');
    document.querySelector('.sm-overflow-buttons').classList.remove('sm-hide');
    return;
  }

  if (e.target.closest('.sm-overflow-button')) {
    document.querySelector('.sm-overflow-menu').classList.toggle('sm-show');
    return;
  }

  if (e.target.tagName === 'A' && e.target.closest('.sm-overflow-menu')) {
    return;
  }

  if (
    document.querySelector('.sm-overflow-menu').classList.contains('sm-show')
  ) {
    e.preventDefault();
    document.querySelector('.sm-overflow-menu').classList.remove('sm-show');
  }
}

export default function eventHandler() {
  document.body.addEventListener('click', handleClick);
}
