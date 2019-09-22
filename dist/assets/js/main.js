// dEV
// const dev = document.querySelector('.dev');

// function viewPort() {
//   if (window.innerWidth < 640) {
//     dev.textContent = `${window.innerWidth}px, PHONE`;
//   } else if (window.innerWidth > 639 && window.innerWidth < 1024) {
//     dev.textContent = `${window.innerWidth}px, TABLET`;
//   } else if (window.innerWidth > 1023 && window.innerWidth < 1280) {
//     dev.textContent = `${window.innerWidth}px, LAPTOP`;
//   } else {
//     dev.textContent = `${window.innerWidth}px, DESKTOP`;
//   }
// }

// viewPort();

// window.addEventListener('resize', viewPort);


// Add Grid styles

const gridContainers = document.querySelectorAll('.grid-container-home');

gridContainers.forEach((element) => {
  const gridItems = element.querySelectorAll('.card');

  element.classList.add(`grid-container-home-${gridItems.length}`);
});

//-------------------------------------------
// Fly in fixed navbar
// Will have to add padding to offset content?
//-------------------------------------------

// const fixedNavbar = document.querySelector('.fixed-navbar');
// const navbarTest = document.querySelector('.navbar-test');

// let lastKnownScrollPos = 0;
// let ticking = false;

// function scroller(scrollPos) {
//   if (navbarTest.offsetHeight - (navbarTest.offsetHeight * 0.9) < scrollPos) {
//     fixedNavbar.style.background = '#181818';
//   } else {
//     fixedNavbar.style.background = 'transparent';
//   }
// }

// window.addEventListener('scroll', () => {
//   lastKnownScrollPos = window.scrollY;

//   if (!ticking) {
//     window.requestAnimationFrame(() => {
//       scroller(lastKnownScrollPos);
//       ticking = false;
//     });

//     ticking = true;
//   }
// });

// Slide in mobile nav menu
const mobileNavBtn = document.getElementById('mobile-nav-btn');
const mobileMenu = document.querySelector('.mobile-nav-menu');
const mobileHamburger = document.querySelector('.hamburger');
const mobileMenuInner = document.querySelector('.mobile-nav-menu-inner');

function closeMobileNavMenu() {
  mobileHamburger.classList.remove('is-active');
  mobileMenu.classList.add('nav-menu-hidden');
  mobileMenu.classList.remove('nav-menu-expanded');
  mobileMenu.setAttribute('aria-expanded', false);
  document.body.classList.remove('no-scroll');
}

function closeByEsc(keyPressed) {
  if (keyPressed.key === 'Escape') {
    closeMobileNavMenu();
    document.body.removeEventListener('keydown', closeByEsc);
  }
}

function openMobileNavMenu() {
  mobileHamburger.classList.add('is-active');
  mobileMenu.classList.remove('nav-menu-hidden');
  mobileMenu.classList.add('nav-menu-expanded');
  mobileMenu.addEventListener('click', closeMobileNavMenu);
  mobileMenu.setAttribute('aria-expanded', true);
  document.body.classList.add('no-scroll');
  // Close nav menu with ESC key
  document.body.addEventListener('keydown', closeByEsc);
}

mobileNavBtn.addEventListener('click', () => {
  mobileMenuInner.addEventListener('click', (event) => {
    event.stopPropagation();
  });
  if (mobileMenu.classList.contains('nav-menu-hidden')) {
    openMobileNavMenu();
  } else {
    closeMobileNavMenu();
  }
});

//-------------------------------------------
// Reading Progress Bar and Share Bar
//-------------------------------------------
let lastKnownScrollPos = 0;
let ticking = false;

// function scroller(scrollPos) {
//   if (navbarTest.offsetHeight - (navbarTest.offsetHeight * 0.9) < scrollPos) {
//     fixedNavbar.style.background = '#181818';
//   } else {
//     fixedNavbar.style.background = 'transparent';
//   }
// }

// Variables for reading progress
const progressBar = document.querySelector('.post-reading-progress');
const shareBar = document.querySelector('.post-share-bar');
const footer = document.querySelector('.footer');
const buffer = 50;

// Variables for share bar
const postImg = document.querySelector('.post-img');
const postContentHeight = document.querySelector('.post-content').clientHeight;

function readingBarProgress(scrollPos) {
  const progress = Math.ceil((scrollPos / postContentHeight) * 100);
  progressBar.style.width = `${progress}%`;
}

function shareBarAnimation() {
  if (postImg.getBoundingClientRect().bottom + buffer < shareBar.getBoundingClientRect().top
    && shareBar.getBoundingClientRect().bottom < footer.getBoundingClientRect().top - buffer) {
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

if (progressBar) {
  window.addEventListener('scroll', () => {
    lastKnownScrollPos = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        readingBarProgress(lastKnownScrollPos);
        shareBarAnimation();
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

copyButton.addEventListener('click', () => {
  const url = window.location.href;
  const temp = document.createElement('input');
  document.body.appendChild(temp);
  temp.value = url;
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
});

//-------------------------------------------
// Modals
//-------------------------------------------
const subBtns = document.querySelectorAll('.navbar-subscribe-btn');
const searchBtns = document.querySelectorAll('.navbar-search-btn');

function modalOpen(e) {
  const id = e.currentTarget.dataset.id.toString();
  const targetDiv = document.querySelector(`.${id}-modal`);
  targetDiv.style.marginLeft = '0';
  targetDiv.setAttribute('aria-expanded', 'true');
  // document.body.classList.add('no-scroll');
}

subBtns.forEach((el) => {
  el.addEventListener('click', (e) => modalOpen(e));
});

searchBtns.forEach((el) => {
  el.addEventListener('click', (e) => modalOpen(e));
});

const modalClose = document.querySelectorAll('.modal-close');

modalClose.forEach((el) => el.addEventListener('click', (e) => {
  e.currentTarget.parentElement.parentElement.setAttribute('aria-expanded', 'false');
  e.currentTarget.parentElement.parentElement.style.marginLeft = '100%';

  // document.body.classList.remove('no-scroll');
}));
