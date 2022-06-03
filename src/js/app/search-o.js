import * as JsSearch from 'js-search';

const searchModal = document.getElementById('sm-search-modal');

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

async function getPosts() {
  const timestamp = parseInt(localStorage.getItem('timestamp'), 10);
  const now = Date.now();

  if (!timestamp || now > timestamp) {
    try {
      const res = await fetch(
        `${window.location.protocol}//${window.location.host}/ghost/api/content/posts/?key=${SEARCH_API}&limit=all`,
      );
      const { posts } = await res.json();
      localStorage.setItem('posts', JSON.stringify(posts));
      localStorage.setItem('timestamp', createTimestamp());
      return posts;
    } catch (e) {
      console.log(e);
    }
  } else {
    return JSON.parse(localStorage.getItem('posts'));
  }
}

const search = async () => {
  const posts = await getPosts();

  // Page Elements
  const searchInput = document.getElementById('sm-search-input');
  const runSearchBtn = document.getElementById('sm-run-search-btn');
  const searchResultHeader = document.querySelector(
    '.sm-search-results__header',
  );
  const searchResult = document.querySelector('.sm-search-results__container');

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
      searchResult.innerHTML += `<article class="sm-search-results__item">
            <a class="sm-search-results__link" href="${post.url}">
              <p class="sm-search-results__date">${dateFormatter(
                post.published_at,
              )}</p>
              <p class="sm-search-results__title">${post.title}</p>
              <p class="sm-search-results__excerpt">
                ${htmlReplace(post.excerpt)}</p>
                </a>
            </article>`;
    });

    stateLoader('loading', false);
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
