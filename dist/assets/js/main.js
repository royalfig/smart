//-------------------------------------------
// Grid Styles
//-------------------------------------------

const gridContainers = document.querySelectorAll(".grid-container-home");

gridContainers.forEach(element => {
  const gridItems = element.querySelectorAll(".card");

  element.classList.add(`grid-container-home-${gridItems.length}`);
});

//-------------------------------------------
// Animation
//-------------------------------------------
document.body.onload = document.body.classList.add("animate");

//-------------------------------------------
// Color Mode Toggle
//-------------------------------------------

const sun = document.querySelectorAll(".color-mode-btn--sun");
const moon = document.querySelectorAll(".color-mode-btn--moon");

const toggleBrightMode = () => {
  document.documentElement.setAttribute("color-mode", "bright");
  localStorage.setItem("pref", "bright");
};

const toggleDarkMode = () => {
  document.documentElement.setAttribute("color-mode", "dark");
  localStorage.setItem("pref", "dark");
};

sun.forEach(btn => {
  btn.addEventListener("click", toggleBrightMode);
});

moon.forEach(btn => {
  btn.addEventListener("click", toggleDarkMode);
});

(function toggleCheck() {
  if (localStorage.getItem("pref") === "bright") {
    toggleBrightMode();
  }
})();

// animate navbar on desktop
const siteTitles = document.querySelectorAll(".site-title");
const hero = document.querySelector(".hero");
let scrollPosHero = 0;
let tickingHero = false;

const animateNav = scrollPos => {
  if (scrollPosHero > hero.offsetHeight + 25) {
    siteTitles.forEach(item => item.classList.add("show-nav"));
  } else {
    siteTitles.forEach(item => item.classList.remove("show-nav"));
  }
};

if (hero !== null) {
  window.addEventListener("scroll", () => {
    scrollPosHero = window.scrollY;

    if (!tickingHero) {
      window.requestAnimationFrame(() => {
        animateNav();
        tickingHero = false;
      });

      tickingHero = true;
    }
  });
}
//-------------------------------------------
// Mobile Nav Menu
//-------------------------------------------
const smSearchBtn = document.querySelector(".navbar-mobile__search-btn");
const lgSearchBtn = document.querySelector(".navbar__right-item--search");
const hamburgerBtn = document.querySelector(".navbar-mobile__hamburger-btn");
const mobileNavMenu = document.querySelector(".mobile-nav-menu");
const searchModal = document.querySelector(".modal-search");
const modalSearchCloseBtn = document.querySelector(".modal-search__close-btn");
const searchModalInner = document.querySelector(
  ".modal-search__inner-container"
);
const mobileNavMenuInner = document.querySelector(".mobile-nav-menu__inner");

if (typeof SEARCH_API !== "undefined") {
  smSearchBtn.style.display = "block";
  lgSearchBtn.style.display = "block";
}

const btns = [smSearchBtn, lgSearchBtn, hamburgerBtn, modalSearchCloseBtn];

const closeMenu = (input, target) => {
  document.body.classList.remove(`expanded-${target}`);
  input.setAttribute("aria-expanded", "false");
  input.setAttribute("aria-hidden", "true");
};

const openMenu = (input, target) => {
  if (document.body.classList.contains("expanded-menu")) {
    closeMenu(mobileNavMenu, "menu");
  }
  if (document.body.classList.contains("expanded-modal-search")) {
    closeMenu(searchModal, "modal-search");
  }
  document.body.classList.add(`expanded-${target}`);
  input.setAttribute("aria-expanded", "true");
  input.setAttribute("aria-hidden", "false");
  const closeByEsc = key => {
    if (key.key === "Escape") {
      closeMenu(input, target);
      document.body.removeEventListener("keyup", closeByEsc);
    }
  };
  document.body.addEventListener("keyup", closeByEsc);
};

btns.forEach(item => {
  item.addEventListener("click", e => {
    const { target } = e.currentTarget.dataset;
    const targetEl = document.getElementById(target);
    if (targetEl.getAttribute("aria-expanded") === "false") {
      return openMenu(targetEl, target);
    }
    return closeMenu(targetEl, target);
  });
});
//-------------------------------------------
// Post Scripts
//-------------------------------------------

//-------------------------------------------
// Reading Progress Bar and Share Bar
//-------------------------------------------
let lastKnownScrollPos = 0;
let ticking = false;

// Variables for reading progress
const progressBar = document.querySelector(".post-reading-progress");
const shareBar = document.querySelector(".post-share-bar");
const footer = document.querySelector(".footer--outer-container");
const buffer = 50;

// Variables for share bar
const postImg =
  document.querySelector(".post__img") !== null
    ? document.querySelector(".post__img")
    : document.querySelector(".post__no-img");
const postContentHeight = document.querySelector(".post__content");

function readingBarProgress(scrollPos) {
  const progress = Math.ceil(
    (scrollPos / postContentHeight.clientHeight) * 100
  );
  progressBar.style.width = `${progress}%`;
}

function shareBarAnimation() {
  if (
    postImg.getBoundingClientRect().bottom + buffer <
      shareBar.getBoundingClientRect().top &&
    shareBar.getBoundingClientRect().bottom <
      footer.getBoundingClientRect().top - buffer
  ) {
    if (window.innerWidth > 1024) {
      shareBar.style.marginLeft = "0";
      shareBar.style.opacity = "1";
    } else {
      shareBar.style.marginBottom = "0";
      shareBar.style.opacity = "1";
    }
  } else if (window.innerWidth > 1024) {
    shareBar.style.marginLeft = "-200px";
    shareBar.style.opacity = "0";
  } else {
    shareBar.style.marginBottom = "-100px";
    shareBar.style.opacity = "0";
  }
}

if (shareBar !== null) {
  window.addEventListener("scroll", () => {
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
const copyButton = document.getElementById("copy-button");

if (copyButton) {
  copyButton.addEventListener("click", () => {
    const url = window.location.href;
    const temp = document.createElement("input");
    document.body.appendChild(temp);
    temp.value = url;
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
  });
}

//-------------------------------------------
// Make tables responsive
//-------------------------------------------
const tables = document.querySelectorAll(".post-content > table");

function tablePrepend(e) {
  const responsiveWrapper = document.createElement("div");
  responsiveWrapper.setAttribute(
    "style",
    "width: 100%; overflow-x: auto; margin: 1em 0;"
  );
  e.parentNode.insertBefore(responsiveWrapper, e);
  responsiveWrapper.appendChild(e);
}

tables.forEach(e => tablePrepend(e));

//-------------------------------------------
// Search function
//-------------------------------------------
let builtIdx = "";

if (typeof SEARCH_API !== "undefined") {
  const api = new GhostContentAPI({
    url: `${window.location.protocol}//${window.location.host}`,
    key: SEARCH_API,
    version: "v2"
  });

  if (builtIdx === "") {
    builtIdx = api.posts
      .browse({
        include: "tags,authors",
        formats: "plaintext",
        limit: "all"
      })
      .then(posts => {
        const idx = lunr(function() {
          this.ref("uuid");
          this.field("plaintext");
          this.field("title");

          posts.forEach(doc => {
            this.add(doc);
          }, this);
        });

        // localStorage.setItem('posts', JSON.stringify(posts));

        return {
          posts,
          idx
        };
      })
      .catch(err => {
        console.error(err);
      });
  }
}

const searchInput = document.querySelector(".modal-search__input");
const searchBtn = document.querySelector(".modal-search__btn");
const searchResultHeader = document.querySelector(".search-results__header");
const searchResult = document.querySelector(".search-results__container");

function searchPosts(term) {
  searchResult.innerHTML = "";

  builtIdx.then(obj => {
    const srch = obj.idx.search(term);

    if (srch.length > 1) {
      searchResultHeader.textContent = `${srch.length} Results`;
    } else if (srch.length !== 0) {
      searchResultHeader.textContent = `${srch.length} Result`;
    } else {
      searchResultHeader.textContent = "No results";
    }

    srch.forEach(el => {
      obj.posts.filter(post => {
        if (post.uuid === el.ref) {
          const published = new Date(post.published_at);
          const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
          ];
          const publishedString = `${published.getDate()} ${
            months[published.getMonth()]
          } ${published.getFullYear()}`;
          searchResult.innerHTML += `<article class="search-results__item"><p class="search-results__date">${publishedString}</p>
          <a class="search-results__link" href="${post.url}">${post.title}</a></article>`;
        }
      });
    });
  });
}

searchBtn.addEventListener("click", () => {
  if (searchInput.value === "") {
    searchResultHeader.textContent = "Enter a search term";
    searchResult.innerHTML = "";
  } else {
    searchPosts(searchInput.value);
  }
});

searchInput.addEventListener("keyup", e => {
  if (searchInput.value === "") {
    searchResultHeader.textContent = "Enter a search term";
    searchResult.innerHTML = "";
  } else if (e.keyCode === 13) {
    searchPosts(searchInput.value);
  }
});

searchInput.addEventListener("focus", e => {
  e.target.value = "";
});
