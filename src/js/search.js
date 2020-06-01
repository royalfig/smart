import Fuse from 'fuse.js';
import GhostContentAPI from '@tryghost/content-api';

const search = () => {
  const api = new GhostContentAPI({
    url: `${window.location.protocol}//${window.location.host}`,
    // eslint-disable-next-line no-undef
    key: SEARCH_API,
    version: 'v3'
  });

  // Page Elements
  const searchInput = document.getElementById('search-input');
  const runSearchBtn = document.getElementById('run-search-btn');
  const searchResultHeader = document.querySelector('.search-results__header');
  const searchResult = document.querySelector('.search-results__container');
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
    'December'
  ];

  const options = {
    keys: ['title', 'plaintext', 'tags.name']
  };

  const posts = api.posts
    .browse({
      include: 'tags',
      formats: 'plaintext',
      limit: 'all'
    })
    .then((data) => data)
    .catch((err) => {
      console.log(err);
    });

  const searchPosts = (term) => {
    searchResult.innerHTML = '';
    posts.then((queriedPosts) => {
      const index = new Fuse(queriedPosts, options);
      const result = index.search(term);
      if (result.length > 1) {
        searchResultHeader.textContent = `${result.length} Results`;
      } else if (result.length !== 0) {
        searchResultHeader.textContent = `${result.length} Result`;
      } else {
        searchResultHeader.textContent = 'No results';
      }

      result.forEach((post) => {
        const day = post.published_at.substring(8, 10);
        const year = post.published_at.substring(0, 4);
        const month =
          months[parseInt(post.published_at.substring(5, 7), 10) - 1];
        const publishedString = `${day} ${month} ${year}`;
        searchResult.innerHTML += `<article class="search-results__item"><p class="search-results__date">${publishedString}</p>
                  <a class="search-results__link" href="${post.url}">${post.title}</a></article>`;
      });
    });
  };

  runSearchBtn.addEventListener('click', () => {
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
};

export default search;
