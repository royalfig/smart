const modalFn = () => {
  // Desktop buttons
  const accountBtn = document.getElementById('account-btn');
  const signinBtn = document.getElementById('signin-btn');
  const subscribeBtn = document.getElementById('subscribe-btn');
  const searchBtn = document.getElementById('search-btn');
  const subtextSubBtn = document.getElementById('subtext-subscribe');
  const subtextSigninBtn = document.getElementById('subtext-signin');

  // Mobile buttons
  const mAccountBtn = document.getElementById('m-account-btn');
  const mSigninBtn = document.getElementById('m-signin-btn');
  const mSubscribeBtn = document.getElementById('m-subscribe-btn');
  const mSearchBtn = document.getElementById('m-search-btn');
  const menuBtn = document.getElementById('menu-btn');

  const closeBtns = document.querySelectorAll('.close-btn');

  // eslint-disable-next-line no-undef
  if (SEARCH_API) {
    searchBtn.style.display = 'block';
    mSearchBtn.style.display = 'block';
  }

  const btns = [
    accountBtn,
    signinBtn,
    subscribeBtn,
    searchBtn,
    subtextSubBtn,
    subtextSigninBtn,
    mAccountBtn,
    mSigninBtn,
    mSubscribeBtn,
    mSearchBtn,
    menuBtn
  ];

  const close = (modal) => {
    document.body.classList.remove('expanded-modal');
    modal.setAttribute('aria-expanded', 'false');
    const input = modal.querySelector('input');
    input.value = '';
  };

  const closeHandler = (e) => {
    const modal = e.currentTarget.parentElement;
    close(modal);
  };

  const openHandler = (e) => {
    if (e.currentTarget.closest('.modal')) {
      close(e.currentTarget.closest('.modal'));
    }
    const modal = document.getElementById(e.currentTarget.dataset.target);
    document.body.classList.add('expanded-modal');
    modal.setAttribute('aria-expanded', 'true');
    const input = modal.querySelector('input');
    input.focus();
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
