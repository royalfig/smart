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


// Fly in fixed navbar
// Will have to add padding to offset content?
const fixedNavbar = document.querySelector('.fixed-navbar');
const navbarTest = document.querySelector('.navbar-test');

let lastKnownScrollPos = 0;
let ticking = false;

function scroller(scrollPos) {
  if (navbarTest.offsetHeight - (navbarTest.offsetHeight * 0.9) < scrollPos) {
    fixedNavbar.style.background = '#181818';
  } else {
    fixedNavbar.style.background = 'transparent';
  }
}

window.addEventListener('scroll', () => {
  lastKnownScrollPos = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      scroller(lastKnownScrollPos);
      ticking = false;
    });

    ticking = true;
  }
});

// Slide in mobile nav menu
const mobileNavBtn = document.getElementById('mobile-nav-btn');
const mobileMenu = document.querySelector('.mobile-nav-menu');
const mobileNavbar = document.querySelector('.nav-mobile');

mobileNavBtn.addEventListener('click', () => {
  if (mobileMenu.classList.contains('nav-menu-hidden')) {
    mobileMenu.classList.remove('nav-menu-hidden');
    mobileMenu.classList.add('nav-menu-expanded');
    document.body.classList.add('no-scroll');
  } else {
    mobileMenu.classList.add('nav-menu-hidden');
    mobileMenu.classList.remove('nav-menu-expanded');
    document.body.classList.remove('no-scroll');
  }
});
