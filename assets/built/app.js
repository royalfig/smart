(function () {
  'use strict';

  /*
   * Color mode toggle
   */

  function toggleColorMode(color) {
    document.documentElement.setAttribute('data-color-pref', color);
    localStorage.setItem('pref', color);
  }

  function determineColorModeSupport() {
    const colorPrefButtons = document.querySelectorAll('.sm-dark-mode, .sm-light-mode');

    const hasSupport = window.CSS && CSS.supports('color', 'var(--primary)');

    // If the browser doesn't support custom settings, hide buttons
    if (!hasSupport) {
      colorPrefButtons.forEach((e) => {
        e.style.display = 'none';
      });
    }
  }

  function updateCopyButtonState() {
    const copyButtons = document.querySelectorAll('.sm-copy-button');
    copyButtons.forEach((el) => {
      const copyButton = el;
      const currentState = copyButton.innerHTML;
      copyButton.innerHTML =
        '<svg viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path d="M6 4v4h12V4h2.007c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.994.994 0 0 1 3 21.007V4.993C3 4.445 3.445 4 3.993 4H6zm2-2h8v4H8V2z"/></svg> Copied ✅';
      setTimeout(() => {
        copyButton.innerHTML = currentState;
      }, 3000);
    });
  }
  async function copyToClipboard() {
    const currentURL = window.location.href;
    await navigator.clipboard.writeText(currentURL);
    updateCopyButtonState();
  }

  class Saves {
    constructor(e) {
      this.id = (e && e.dataset.id) || null;
      this.title = (e && e.dataset.title) || null;
      this.items = () =>
        Saves.makeArray(JSON.parse(localStorage.getItem('saves')));
      this.int = null;
    }

    generateItem() {
      return {
        id: this.id,
        title: this.title,
        timestamp: new Date(),
        scrollPos: this.scrollStatus().scrollPos,
        progress: this.scrollStatus().progress,
      };
    }

    save() {
      // also need to update menu
      localStorage.setItem(
        'saves',
        JSON.stringify([this.generateItem(), ...this.items()]),
      );

      this.populateSavesMenu();
      this.updateScrollPosition();

      const els = document.querySelectorAll(`button[data-id=${this.id}]`);
      els.forEach((el) => {
        el.classList.add('sm-love-toggle');
      });
    }

    remove() {
      const items = [...this.items()];
      const itemIndex = items.findIndex((el) => this.id === el.id);
      items.splice(itemIndex, 1);
      localStorage.removeItem('saves');
      if (items.length) {
        localStorage.setItem('saves', JSON.stringify(items));
      }

      this.int = null;
      this.populateSavesMenu();

      const els = document.querySelectorAll(`button[data-id=${this.id}]`);
      els.forEach((el) => {
        el.classList.remove('sm-love-toggle');
      });
    }

    static makeArray(data) {
      if (!data) return [];
      return data.length ? data : [data];
    }

    scrollStatus() {
      if (this.isCurrentPageSaved() < 0) {
        return {
          scrollPos: null,
          progress: null,
        };
      }
      return {
        scrollPos: window.scrollY,
        progress: Math.round(
          (window.scrollY /
            (document.body.scrollHeight - document.body.clientHeight)) *
            100,
        ),
      };
    }

    identifySaves() {
      if (!this.items()) return;

      this.items().forEach((el) => {
        const { id } = el;
        const domEl = document.querySelectorAll(`button[data-id=${id}]`);
        if (domEl) {
          domEl.forEach((button) => button.classList.add('sm-love-toggle'));
        }
      });
    }

    isCurrentPageSaved() {
      const currentPage = window.location.pathname.replace(/\//g, '');
      return this.items().findIndex((item) => item.id === currentPage);
    }

    step() {
      const itemIndex = this.isCurrentPageSaved();
      if (itemIndex < 0) {
        return;
      }

      const items = this.items();
      items[itemIndex].progress = this.scrollStatus().progress;
      items[itemIndex].scrollPos = this.scrollStatus().scrollPos;
      localStorage.removeItem('saves');
      localStorage.setItem('saves', JSON.stringify(items));
      this.populateSavesMenu();
      // TODO check if done

      setTimeout(() => {
        window.requestAnimationFrame(this.step.bind(this));
      }, 1000);
    }

    updateScrollPosition() {
      const items = this.items();
      if (!items.length) return;
      const itemIndex = this.isCurrentPageSaved();

      if (itemIndex < 0) {
        return;
      }

      window.requestAnimationFrame(this.step.bind(this));
    }

    scrollToPos() {
      if (this.isCurrentPageSaved() > -1) {
        const items = this.items();
        window.scrollTo({
          top: items[this.isCurrentPageSaved()].scrollPos,
          behavior: 'smooth',
        });
      }
    }

    renderSavesMenu() {
      const template = this.items().map(
        (el) =>
          `<div class="sm-saves" style="background-image: linear-gradient(to right, hsla(
          var(--primary-h) var(--saturation) var(--lightness) / ${
            el.progress ? 0.35 : 0.15
          }
        ) ${el.progress ? el.progress - 10 : 50}%, hsla(
          var(--primary-h) var(--saturation) var(--lightness) / 0.15
        ) ${el.progress ? el.progress + 10 : 50}%">
            <div class="sm-saves-meta">
                <div>
                    <p class="sm-saves-title"><a href="/${el.id}">${
          el.title
        }</a></p>
                    <p class="sm-saves-date">Saved on ${new Intl.DateTimeFormat().format(
                      new Date(el.timestamp),
                    )}</p>
                </div>
                <button class="sm-circle-icon-button sm-love-button sm-love-toggle" data-id="${
                  el.id
                }" data-title="${el.title}" aria-label="Remove ${
          el.title
        } from favorites">
                <span class="sm-heart-outline-icon">
                <svg><use href="#sm-heart-outline-icon"></use></svg>
                </span>
                <span class="sm-heart-fill-icon">
                <svg><use href="#sm-heart-fill-icon"></use></svg>
                </span>
                </button>
            </div>
        </div>`,
      );
      return template.join('');
    }

    populateSavesMenu() {
      const savesMenu = document.querySelector('.sm-overflow-articles');

      if (!this.items().length) {
        savesMenu.innerHTML =
          '<p>No articles saved yet. Hit the heart to get started!</p>';
        return;
      }
      savesMenu.innerHTML = this.renderSavesMenu();
    }

    init() {
      this.identifySaves();
      this.populateSavesMenu();
      this.scrollToPos();
      this.updateScrollPosition();
    }
  }

  function save(e) {
    console.log(e);
    const savedItems = new Saves(e);

    const items = savedItems.items();

    if (!items.length) {
      savedItems.save();
      return;
    }

    const { id } = savedItems;

    if (items.find((el) => el.id === id)) {
      savedItems.remove();
    } else {
      savedItems.save();
    }
  }

  function handleClick$1(e) {
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

  function eventHandler() {
    document.body.addEventListener('click', handleClick$1);
  }

  function handleClick(e) {
    if (e.code === 'Escape') {
      document.querySelector('[class*=show]');
    }
  }

  function keyClickHandler() {
    document.body.addEventListener('keyup', handleClick);
  }

  function pathnameParser(pathname) {
    if (!/page/.test(pathname)) {
      return pathname;
    }

    return pathname.split('page')[0];
  }

  function generatePagination() {
    const pagination = document.querySelector('.sm-pagination');

    if (!pagination) return;
    const pathname = pathnameParser(window.location.pathname);
    const { pages, page, prev, next } = pagination.dataset;

    const previousButton = document.createElement('a');
    previousButton.innerHTML =
      '<svg aria-hidden="true"><use href="#sm-left-arrow-icon"></use></svg>';
    previousButton.classList.add('sm-circle-icon-button');

    if (prev) {
      previousButton.setAttribute('aria-label', 'previous posts');
      previousButton.setAttribute('href', prev);
    } else {
      previousButton.setAttribute('disabled', 'true');
    }

    pagination.append(previousButton);

    for (let index = 0; index < pages; index += 1) {
      let urlPath;

      if (index === 0 && pathname === '/') {
        urlPath = '/';
      } else if (index === 0 && pathname !== '/') {
        urlPath = pathname;
      } else {
        urlPath = `${pathname}page/${index + 1}/`;
      }

      const div = document.createElement('div');
      div.classList.add('sm-pagination-item');
      const a = document.createElement('a');
      a.setAttribute('href', urlPath);
      a.textContent = index + 1;

      if (+page === index + 1) {
        div.classList.add('sm-current');
      }
      div.append(a);
      pagination.append(div);
    }
    const nextButton = document.createElement('a');
    nextButton.innerHTML =
      '<svg aria-hidden="true"><use href="#sm-right-arrow-icon"></use></svg>';
    nextButton.classList.add('sm-circle-icon-button');
    if (next) {
      nextButton.setAttribute('aria-label', 'next posts');
      nextButton.setAttribute('href', next);
    } else {
      nextButton.setAttribute('disabled', 'true');
    }

    pagination.append(nextButton);
  }

  // eslint-disable-next-line no-undef
  {
    const script = document.createElement('script');
    script.src = `http://${
    (window.location.host || 'localhost').split(':')[0]
  }:35729/livereload.js?snipver=1`;
    document.head.append(script);
    console.info('Reload script added');
  }

  eventHandler();
  determineColorModeSupport();
  generatePagination();
  keyClickHandler();
  new Saves().init();

})();
//# sourceMappingURL=app.js.map
