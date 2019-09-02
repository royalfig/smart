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

// Show and hide search bar
const searchBoxBtn = document.getElementById('search-button');
const searchBox = document.querySelector('.search-box');
const cancelBtn = document.querySelector('.cancel');
const searchBar = document.querySelector('.search-bar');


function showSearchBox(cb) {
  // searchBox.classList.add('search-box-max-height');
  searchBox.style.display = 'block';
  let op = 0.1;
  const timer = setInterval(() => {
    if (op >= 1) {
      cb();
      clearInterval(timer);
    } else {
      op += 0.05;
      searchBox.style.opacity = op;
    }
  }, 10);

  searchBar.firstElementChild.focus();
  searchBox.addEventListener('click', (e) => {
    const searchElements = [];
    const searchBarChildren = searchBar.childNodes;
    searchBarChildren.forEach((e) => searchElements.push(e));
    searchElements.push(searchBar);
    if (!searchElements.includes(e.target)) {
      searchBox.style.display = 'none';
      searchBox.style.opacity = '0';
      searchBar.style.transform = 'translateY(-100%)';
    }
  });

  searchBox.addEventListener('keyup', (e) => {
    if (e.keyCode === 27) {
      searchBox.style.display = 'none';
      searchBox.style.opacity = '0';
      searchBar.style.transform = 'translateY(-100%)';
    }
  });
}

function transform() {
  searchBar.style.transform = 'translateY(0%)';
}

searchBoxBtn.addEventListener('click', () => {
  showSearchBox(transform);
});

function closeBox() {
  searchBox.style.display = 'none';
  searchBox.style.opacity = '0';
  searchBar.style.transform = 'translateY(-100%)';
}

cancelBtn.addEventListener('click', () => closeBox());

// Add Grid styles
const gridContainers = document.querySelectorAll('.grid-container-home');

gridContainers.forEach((element) => {
  const gridItems = element.querySelectorAll('.home-post');

  element.classList.add(`grid-container-home-${gridItems.length}`);
});


// Fly in fixed navbar
// Will have to add padding to offset content
const fixedNavbar = document.querySelector('.fixed-navbar');
const heroImage = document.querySelector('.hero-img');

let lastKnownScrollPos = 0;
let ticking = false;

function scroller(scrollPos) {
  if (heroImage.offsetHeight < scrollPos) {
    fixedNavbar.style.transform = 'translateY(0)';
  } else {
    fixedNavbar.style.transform = 'translateY(-100%)';
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
