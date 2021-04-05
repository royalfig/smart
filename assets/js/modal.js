const { trapFocus, releaseFocus, tabKeyHandler } = require('./focusTrap');

const searchBtn = document.getElementById('search-btn');
const mSearchBtn = document.getElementById('m-search-btn');
const menuBtn = document.getElementById('menu-btn');
const closeBtns = document.querySelectorAll('.modal__close-btn');

if (typeof SEARCH_API !== 'undefined') {
  searchBtn.style.display = 'block';
  mSearchBtn.style.display = 'block';
}

const btns = [searchBtn, mSearchBtn, menuBtn];

const modalFn = () => {
  // eslint-disable-next-line no-undef

  const close = (modal) => {
    document.body.classList.remove('expanded-modal');
    modal.setAttribute('aria-expanded', 'false');
    const input = modal.querySelector('input');
    if (input) {
      input.value = '';
    }
    releaseFocus(modal);
  };

  const closeHandler = (e) => {
    const modal = e.currentTarget.closest('.modal');
    close(modal);
  };

  const openHandler = (e) => {
    // if (e.currentTarget.closest('.modal')) {
    //   close(e.currentTarget.closest('.modal'));
    // }
    const modal = document.getElementById(e.currentTarget.dataset.target);
    document.body.classList.add('expanded-modal');
    modal.setAttribute('aria-expanded', 'true');
    trapFocus(modal);
    modal.addEventListener('keydown', tabKeyHandler);
    const nonTargetCloseHandler = (ev) => {
      if (ev.target.classList.contains('content-wrap')) {
        close(modal);
        document.body.removeEventListener('click', nonTargetCloseHandler);
        // eslint-disable-next-line no-use-before-define
        document.body.removeEventListener('keyup', closeByEscHandler);
      }
    };
    document.body.addEventListener('click', nonTargetCloseHandler);
    const closeByEscHandler = (key) => {
      if (key.key === 'Escape' || key.keyCode === 27) {
        close(modal);
        document.body.removeEventListener('keyup', closeByEscHandler);
        document.body.removeEventListener('click', nonTargetCloseHandler);
      }
    };
    document.body.addEventListener('keyup', closeByEscHandler);
  };

  btns.forEach((btn) => {
    if (btn) {
      btn.addEventListener('click', openHandler);
    }
  });

  closeBtns.forEach((btn) => {
    if (btn) {
      btn.addEventListener('click', closeHandler);
    }
  });
};

export default modalFn;
