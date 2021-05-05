//-------------------------------------------
// Reading Progress Bar and Share Bar
//-------------------------------------------
let lastKnownScrollPos = 0;
let ticking = false;

// Variables for reading progress
const progressBar = document.querySelector('.sm-post-reading-progress');
const shareBar = document.querySelector('.sm-post-share-bar');
const footer = document.querySelector('.sm-outer-container--footer');
const buffer = 50;

// Variables for share bar
const postImg =
  document.querySelector('.sm-post__img') ||
  document.querySelector('.sm-post__no-img');
const postContentHeight = document.querySelector('.sm-post__content');

const readingBarProgress = (scrollPos) => {
  const progress = Math.ceil(
    (scrollPos / postContentHeight.clientHeight) * 100,
  );
  progressBar.style.width = `${progress}%`;
};

const shareBarAnimation = () => {
  if (
    postImg.getBoundingClientRect().bottom + buffer <
      shareBar.getBoundingClientRect().top &&
    shareBar.getBoundingClientRect().bottom <
      footer.getBoundingClientRect().top - buffer
  ) {
    if (window.innerWidth >= 1024) {
      shareBar.style.transform = 'translate3d(0,-50%,0)';
      shareBar.style.opacity = '1';
    } else {
      shareBar.style.transform = 'translate3d(0,0,0)';
      shareBar.style.opacity = '1';
    }
  } else if (window.innerWidth >= 1024) {
    shareBar.style.transform = 'translate3d(-100%,-50%,0)';
    shareBar.style.opacity = '0';
  } else {
    shareBar.style.transform = 'translate3d(0,100%,0)';
    shareBar.style.opacity = '0';
  }
};

const headings = document.querySelectorAll('.sm-post__content h2');
const headingSpace = document.querySelector('.sm-navbar__new-link');
const defaultHeading = headingSpace.textContent;

const showHeadings = (pos) => {
  if (!headings) {
    return null;
  }

  headings.forEach((heading) => {
    const text = heading.textContent;
    const { y } = heading.getBoundingClientRect();
    console.log(text, y);
    if (y > -125 && y < 125) {
      headingSpace.textContent = text;
    }
  });
};

export default function progressAndShareInit() {
  if (shareBar !== null) {
    window.addEventListener('scroll', () => {
      lastKnownScrollPos = window.scrollY;

      if (!ticking) {
        shareBarAnimation();
        window.requestAnimationFrame(() => {
          showHeadings(lastKnownScrollPos);
          if (progressBar !== null) {
            readingBarProgress(lastKnownScrollPos);
          }
          ticking = false;
        });

        ticking = true;
      }
    });
  }
}
