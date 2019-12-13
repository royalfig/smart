//-------------------------------------------
// Grid Styles
//-------------------------------------------

const gridContainers = document.querySelectorAll('.grid-container-home');

gridContainers.forEach((element) => {
  const gridItems = element.querySelectorAll('.card');

  element.classList.add(`grid-container-home-${gridItems.length}`);
});

//-------------------------------------------
// Animation
//-------------------------------------------
document.body.onload = document.body.classList.add('animate');

//-------------------------------------------
// Mobile Nav Menu
//-------------------------------------------
// const mobileNavBtn = document.getElementById('mobile-nav-btn');
const mobileMenu = document.querySelector('.mobile-nav-menu');
const mobileHamburger = document.querySelector('.navbar-mobile__hamburger-btn');
const mobileMenuInner = document.querySelector('.mobile-nav-menu__inner');

const smSearchBtn = document.getElementById('sm-search');
const lgSearchBtn = document.getElementById('lg-search');
const searchBtns = [smSearchBtn, lgSearchBtn];

function closeMobileNavMenu() {
  mobileHamburger.classList.remove('is-active');
  mobileMenu.classList.add('mobile-nav-menu--hidden');
  mobileMenu.classList.remove('mobile-nav-menu--expanded');
  mobileMenu.setAttribute('aria-expanded', false);
  document.body.classList.remove('show-modal');
  // mobileMenu.removeEventListener('click');
}

function closeByEsc(keydown, action) {
  if (keydown.key === 'Escape') {
    action();
    document.body.removeEventListener('keydown', closeByEsc);
  }
}

function openMobileNavMenu() {
  mobileHamburger.classList.add('is-active');
  mobileMenu.classList.remove('mobile-nav-menu--hidden');
  mobileMenu.classList.add('mobile-nav-menu--expanded');
  // mobileMenu.addEventListener('click', closeMobileNavMenu);
  mobileMenu.setAttribute('aria-expanded', true);
  document.body.classList.add('show-modal');
  // Close nav menu with ESC key
  document.body.addEventListener('keydown', (keydown) => closeByEsc(keydown, closeMobileNavMenu),);
}

mobileHamburger.addEventListener('click', () => {
  if (!mobileMenu.classList.contains('mobile-nav-menu--hidden')) {
    closeMobileNavMenu();
  } else {
    openMobileNavMenu();
  }
});

const searchBtns = 




const closeMenu = (input) => {
  // parse input
  // toggle aria-attribute
  // add el to body
  // add keyboard ev listener
};

const openMenu = (input) => {};

//-------------------------------------------
// Modals
//-------------------------------------------
// const subBtns = document.querySelectorAll('.navbar-subscribe-btn');

function modalOpen(el) {
  if (el.id.substring(0, 2) === 'sm') {
    closeMobileNavMenu();
  }

  const targetDiv = document.querySelector('.modal__search');
  targetDiv.style.transform = 'translate3d(0,0,0)';
  targetDiv.setAttribute('aria-expanded', 'true');
  targetDiv.querySelector('input').focus();
  document.body.classList.add('show-modal');
}

// subBtns.forEach((el) => {
//   el.addEventListener('click', (e) => modalOpen(e));
// });

searchBtns.forEach((el) => {
  el.addEventListener('click', () => {
    modalOpen(el);
  });
});

const modalClose = document.querySelectorAll('.modal-close');

modalClose.forEach((el) => el.addEventListener('click', (e) => {
    e.currentTarget.parentElement.parentElement.setAttribute(
      'aria-expanded',
      'false',
    );
    e.currentTarget.parentElement.parentElement.style.transform =      'translate3d(100vw,0,0)';
    document.body.classList.remove('show-modal');
  }),);

//-------------------------------------------
// Post Scripts
//-------------------------------------------

//-------------------------------------------
// Reading Progress Bar and Share Bar
//-------------------------------------------
let lastKnownScrollPos = 0;
let ticking = false;

// Variables for reading progress
const progressBar = document.querySelector('.post-reading-progress');
const shareBar = document.querySelector('.post-share-bar');
const footer = document.querySelector('.footer');
const buffer = 50;

// Variables for share bar
const postImg =  !document.querySelector('.post-img') !== null
    ? document.querySelector('.post-img')
    : document.querySelector('.no-post-img');
const postContentHeight = document.querySelector('.post-content');

function readingBarProgress(scrollPos) {
  const progress = Math.ceil(
    (scrollPos / postContentHeight.clientHeight) * 100,
  );
  progressBar.style.width = `${progress}%`;
}

function shareBarAnimation() {
  if (
    postImg.getBoundingClientRect().bottom + buffer
      < shareBar.getBoundingClientRect().top
    && shareBar.getBoundingClientRect().bottom
      < footer.getBoundingClientRect().top - buffer
  ) {
    if (window.innerWidth > 1024) {
      shareBar.style.marginLeft = '0';
      shareBar.style.opacity = '1';
    } else {
      shareBar.style.marginBottom = '0';
      shareBar.style.opacity = '1';
    }
  } else if (window.innerWidth > 1024) {
    shareBar.style.marginLeft = '-200px';
    shareBar.style.opacity = '0';
  } else {
    shareBar.style.marginBottom = '-100px';
    shareBar.style.opacity = '0';
  }
}

if (shareBar !== null) {
  window.addEventListener('scroll', () => {
    lastKnownScrollPos = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        shareBarAnimation();
        if (progressBar !== null) {
          readingBarProgress(lastKnownScrollPos);
        }
        ticking = false;
      });

      ticking = true;
    }
  });
}

//-------------------------------------------
// Copy Function
//-------------------------------------------
const copyButton = document.getElementById('copy-button');

if (copyButton) {
  copyButton.addEventListener('click', () => {
    const url = window.location.href;
    const temp = document.createElement('input');
    document.body.appendChild(temp);
    temp.value = url;
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
  });
}

//-------------------------------------------
// Make tables responsive
//-------------------------------------------
const tables = document.querySelectorAll('.post-content > table');

function tablePrepend(e) {
  const responsiveWrapper = document.createElement('div');
  responsiveWrapper.setAttribute(
    'style',
    'width: 100%; overflow-x: auto; margin: 1em 0;',
  );
  e.parentNode.insertBefore(responsiveWrapper, e);
  responsiveWrapper.appendChild(e);
}

tables.forEach((e) => tablePrepend(e));

//-------------------------------------------
// Search function
//-------------------------------------------
let builtIdx = '';

if (typeof SEARCH_API !== 'undefined') {
  const api = new GhostContentAPI({
    url: `${window.location.protocol}//${window.location.host}`,
    key: SEARCH_API,
    version: 'v2',
  });

  if (builtIdx === '') {
    builtIdx = api.posts
      .browse({
        include: 'tags,authors',
        formats: 'plaintext',
        limit: 'all',
      })
      .then((posts) => {
        const idx = lunr(function () {
          this.ref('uuid');
          this.field('plaintext');
          this.field('title');

          posts.forEach((doc) => {
            this.add(doc);
          }, this);
        });

        localStorage.setItem('posts', JSON.stringify(posts));

        return {
          posts,
          idx,
        };
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

const searchInput = document.querySelector('.modal-search__input');
const searchBtn = document.querySelector('.modal-search__btn');
const searchResultHeader = document.querySelector('.search-results__header');
const searchResult = document.querySelector('.search-results_container');

function searchPosts(term) {
  searchResult.innerHTML = '';

  builtIdx.then((obj) => {
    const srch = obj.idx.search(term);

    if (srch.length > 1) {
      searchResultHeader.textContent = `${srch.length} Results`;
    } else if (srch.length !== 0) {
      searchResultHeader.textContent = `${srch.length} Result`;
    } else {
      searchResultHeader.textContent = 'No results';
    }

    srch.forEach((el) => {
      obj.posts.filter((post) => {
        if (post.uuid === el.ref) {
          const published = new Date(post.published_at);
          const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ];
          const publishedString = `${
            months[published.getMonth()]
          } ${published.getDate()}, ${published.getFullYear()}`;
          searchResult.innerHTML += `<article class="search-results__item"><p class="search-results__date">${publishedString}</p>
          <a class="search-results__link" href="${post.url}">${post.title}</a></article>`;
        }
      });
    });
  });
}

searchBtn.addEventListener('click', () => {
  if (searchInput.value === '') {
    searchResultHeader.textContent = 'Enter a search term';
    searchResult.innerHTML = '';
  } else {
    searchPosts(searchInput.value);
  }
});

searchInput.addEventListener('keyup', (e) => {
  if (searchInput.value === '') {
    searchResultHeader.textContent = 'Enter a search term';
    searchResult.innerHTML = '';
  } else if (e.keyCode === 13) {
    searchPosts(searchInput.value);
  }
});

searchInput.addEventListener('focus', (e) => {
  e.target.value = '';
});
