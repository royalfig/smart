/* eslint-disable import/no-extraneous-dependencies */
import Fuse from 'fuse.js/dist/fuse.basic.esm';
import GhostContentAPI from '@tryghost/content-api';

const searchModal = document.getElementById('search-modal');

const createTimestamp = (minutes = 60) => {
  const timestamp = Date.now() + minutes * 60000;
  return timestamp;
};

const stateLoader = (state, status) => {
  if (status) {
    searchModal.classList.add(state);
  } else {
    searchModal.classList.remove(state);
  }
};

const search = () => {
  const freshApi = new GhostContentAPI({
    url: `${window.location.protocol}//${window.location.host}`,
    // eslint-disable-next-line no-undef
    key: SEARCH_API,
    version: 'v3'
  });

  const api = new Promise((resolve, reject) => {
    const timestamp = parseInt(localStorage.getItem('timestamp'), 10);
    const now = Date.now();

    if (!timestamp || now > timestamp) {
      freshApi.posts
        .browse({
          include: 'tags',
          formats: 'plaintext',
          limit: 'all'
        })
        .then((data) => {
          localStorage.setItem('posts', JSON.stringify(data));
          localStorage.setItem('timestamp', createTimestamp());
          resolve(data);
        });
    } else {
      const posts = JSON.parse(localStorage.getItem('posts'));
      resolve(posts);
      reject(new Error("Couldn't fetch posts"));
    }
  }).catch((err) => {
    // eslint-disable-next-line no-alert
    alert(`Something went wrong. Please try again.\nError Details: ${err} err`);
  });

  // Page Elements
  const searchInput = document.getElementById('search-input');
  const runSearchBtn = document.getElementById('run-search-btn');
  const searchResultHeader = document.querySelector('.search-results__header');
  const searchResult = document.querySelector('.search-results__container');
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const searchPosts = (term) => {
    const options = {
      threshold: 0.2,
      // ignoreLocation: true,
      location: 5000,
      distance: 10000,
      minMatchCharLength: term.length - 2,
      includeMatches: true,
      keys: ['title', 'plaintext', 'tags.name']
    };
    stateLoader('loading', true);
    searchResult.innerHTML = '';
    api.then((posts) => {
      const index = new Fuse(posts, options);
      const result = index.search(term);
      if (result.length > 1) {
        searchResultHeader.textContent = `${result.length} Results for “${term}”`;
      } else if (result.length !== 0) {
        searchResultHeader.textContent = `${result.length} Result for “${term}”`;
      } else {
        searchResultHeader.textContent = `No results for “${term}”`;
      }

      result.forEach((post) => {
        const match = post.matches;
        let matchText = '';
        let matchKey = '';
        const matchKeyTransform = (input) => {
          if (input.toUpperCase() === 'PLAINTEXT') {
            return '<span class="match-key">TEXT</span> ';
          }
          if (input.toUpperCase() === 'TAGS.NAME') {
            return '<span class="match-key">TAG</span> ';
          }
          return `<span class="match-key">${input.toUpperCase()}</span>`;
        };

        if (match.length) {
          const firstMatch = match[0];
          const { indices } = firstMatch;
          const startMatch = indices[0][0];
          const endMatch = indices[0][1];
          const matchArr = Array.from(firstMatch.value);
          matchArr.splice(startMatch, 0, '»');
          matchArr.splice(endMatch + 2, 0, '«');
          const excerptStart = startMatch - 10 > 0 ? startMatch - 10 : 0;
          matchKey = matchKeyTransform(firstMatch.key);
          matchText = matchArr
            .join('')
            .substring(excerptStart, excerptStart + 255)
            .trim();
          matchText = excerptStart === 0 ? matchText : `...${matchText}`;
          matchText = matchText.length > 254 ? `${matchText}...` : matchText;
          matchText = matchText.replace(/<.+?>/g, '');
        }

        const day = post.item.published_at.substring(8, 10);
        const year = post.item.published_at.substring(0, 4);
        const month =
          months[parseInt(post.item.published_at.substring(5, 7), 10) - 1];
        const publishedString = `${day} ${month} ${year}`;
        searchResult.innerHTML += `<article class="search-results__item">
              <p class="search-results__date">${publishedString}</p>
              <a class="search-results__link" href="${post.item.url}">${post.item.title}</a>
              <p class="search-results__match">
                ${matchKey}${matchText}</p>
            </article>`;
      });

      stateLoader('loading', false);
      stateLoader('success', true);
    });
  };

  const enterSearchTermCheck = () => {
    searchResultHeader.textContent = 'Enter a search term';
    searchResult.innerHTML = ''; // Remove?
  };

  runSearchBtn.addEventListener('click', () => {
    if (searchInput.value === '') {
      enterSearchTermCheck();
    } else {
      searchPosts(searchInput.value);
    }
  });

  searchInput.addEventListener('keyup', (e) => {
    if (searchInput.value === '') {
      enterSearchTermCheck();
    } else if (e.keyCode === 13) {
      searchPosts(searchInput.value);
    }
  });

  const resetState = () => {
    stateLoader('loading', false);
    stateLoader('success', false);
  };

  searchInput.addEventListener('focus', (e) => {
    resetState();
    e.target.value = '';
  });

  searchInput.addEventListener('input', () => {
    resetState();
  });
};

export default search;
