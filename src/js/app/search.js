import * as JsSearch from 'js-search';
import GhostContentAPI from '@tryghost/content-api';

const searchModal = document.getElementById('search-modal');

const htmlReplace = (str) => str.replace(/</g, '&lt;').replace(/>/g, '&gt;');
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
    version: 'v4',
  });

  const api = new Promise((resolve, reject) => {
    const timestamp = parseInt(localStorage.getItem('timestamp'), 10);
    const now = Date.now();

    if (!timestamp || now > timestamp) {
      freshApi.posts
        .browse({
          include: 'tags',
          formats: 'plaintext',
          limit: 'all',
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
    alert(`Something went wrong. Please try again.\nError Details: ${err}`);
  });

  // Page Elements
  const searchInput = document.getElementById('search-input');
  const runSearchBtn = document.getElementById('run-search-btn');
  const searchResultHeader = document.querySelector('.search-results__header');
  const searchResult = document.querySelector('.search-results__container');

  const dateFormatter = (isoDate) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    };
    const date = new Date(isoDate);

    return date.toLocaleDateString(undefined, options);
  };

  const searchPosts = (term) => {
    stateLoader('loading', true);
    searchResult.innerHTML = '';
    api.then((posts) => {
      const newSearch = new JsSearch.Search('id');
      newSearch.addIndex('title');
      newSearch.addIndex('plaintext');

      newSearch.addDocuments(posts);
      const result = newSearch.search(term);

      if (result.length > 1) {
        searchResultHeader.textContent = `${result.length} Results for “${term}”`;
      } else if (result.length !== 0) {
        searchResultHeader.textContent = `${result.length} Result for “${term}”`;
      } else {
        searchResultHeader.textContent = `No results for “${term}”`;
      }

      result.forEach((post) => {
        searchResult.innerHTML += `<article class="search-results__item">
            <a class="search-results__link" href="${post.url}">
              <p class="search-results__date">${dateFormatter(
                post.published_at,
              )}</p>
              <p class="search-results__title">${post.title}</p>
              <p class="search-results__excerpt">
                ${htmlReplace(post.excerpt)}</p>
                </a>
            </article>`;
      });

      stateLoader('loading', false);
    });
  };

  const enterSearchTermCheck = () => {
    if (!searchResult.innerHTML) {
      searchResultHeader.textContent = 'Enter a search term';
    }
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
    } else if (e.key === 'Enter') {
      searchPosts(searchInput.value);
    }
  });

  searchInput.addEventListener('focus', (e) => {
    stateLoader('loading', false);
    e.target.value = '';
  });

  searchInput.addEventListener('input', () => {
    stateLoader('loading', false);
  });
};

export default search;
