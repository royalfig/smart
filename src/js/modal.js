/*-------------------------------------------
 Modals
 1. Mobile nav menu
 2. Search
 3. Subscribe
 4. Sign in
 5. Account

 Open associated modal (close other modals if open)

 Close associated modal

 Get all modal buttons (conditional items)

-------------------------------------------*/
// Desktop buttons
const accountBtn = document.getElementById('account-btn');
const signinBtn = document.getElementById('signin-btn');
const subscribeBtn = document.getElementById('subscribe-btn');
const searchBtn = document.getElementById('search-btn');

// Mobile buttons
const mAccountBtn = document.getElementById('m-account-btn');
const mSigninBtn = document.getElementById('m-signin-btn');
const mSubscribeBtn = document.getElementById('m-subscribe-btn');
const mSearchBtn = document.getElementById('m-search-btn');
const menuBtn = document.getElementById('menu-btn');

const closeBtns = document.querySelectorAll('.close-btn');
// const modals = document.querySelectorAll('.modal');

// const mobileSearchBtn = document.querySelector('.navbar-mobile__search-btn');
// const navSearchBtn = document.querySelector('.navbar__right-item--search');
// const hamburgerBtn = document.querySelector('.navbar-mobile__hamburger-btn');
// const mobileNavMenu = document.querySelector('.mobile-nav-menu');
// const mobileNavMenuCloseBtn = document.querySelector(
//   '.mobile-nav-menu__close-btn'
// );
// const modalSearch = document.querySelector('.modal-search');
// const modalSearchCloseBtn = document.querySelector('.modal-search__close-btn');

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
  mAccountBtn,
  mSigninBtn,
  mSubscribeBtn,
  mSearchBtn,
  menuBtn
];

const close = (modal) => {
  document.body.classList.remove('expanded-modal');
  modal.setAttribute('aria-expanded', 'false');
};

const closeHandler = (e) => {
  const modal = e.currentTarget.parentElement;
  close(modal);
};

const openHandler = (e) => {
  const modal = document.getElementById(e.currentTarget.dataset.target);
  document.body.classList.add('expanded-modal');
  modal.setAttribute('aria-expanded', 'true');
  const nonTargetCloseHandler = (ev) => {
    if (ev.target.classList.contains('content-wrap')) {
      close(modal);
      document.body.removeEventListener('click', nonTargetCloseHandler);
      document.body.removeEventListener('keyup', closeByEscHandler);
    }
  };
  document.body.addEventListener('click', nonTargetCloseHandler);
  const closeByEscHandler = (key) => {
    if (key.key === 'Escape') {
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
