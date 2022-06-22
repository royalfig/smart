import MiniSearch from 'minisearch';

const miniSearch = new MiniSearch({
  fields: ['title', 'plaintext'], // fields to index for full-text search
  storeFields: ['title', 'url'], // fields to return with search results
  searchOptions: {
    prefix: true,
    boost: { title: 2 },
    fuzzy: 0.2,
  },
});

function renderResults(searchResults) {
  const results = searchResults.map(
    (result) =>
      `<p class="sm-search-result"><a href="${result.url}">${result.title}</a></p>`,
  );
  return results.join('');
}

function doSearch(e) {
  // Reset search results contain if no input
  if (!e.currentTarget.value.length) {
    document.querySelector('.sm-search-results-container').innerHTML = '';
    document
      .querySelector('.sm-clear-search-button')
      .classList.remove('sm-show-clear-button');
    return;
  }

  // Show clear button after input
  document
    .querySelector('.sm-clear-search-button')
    .classList.add('sm-show-clear-button');

  // Search with default options
  const results = miniSearch.search(e.currentTarget.value, {});
  document.querySelector('.sm-search-results-container').innerHTML =
    results.length
      ? renderResults(results)
      : '<p class="sm-search-result">No results</p>';
}

const cache = {
  writeCache: (posts) => {
    const timestamp = Date.now() + 1000 * 60 * 60 * 3;
    localStorage.setItem('timestamp', timestamp);
    localStorage.setItem('posts', JSON.stringify(posts));
  },
  getCache: () => JSON.parse(localStorage.getItem('posts')),
  isCacheGood: () => {
    const timestamp = localStorage.getItem('timestamp');
    if (!timestamp || timestamp < Date.now()) {
      return false;
    }
    return true;
  },
};

export default async function search() {
  const input = document.querySelector('#sm-search-input');

  // eslint-disable-next-line no-undef
  const key = SEARCH_KEY;
  // eslint-disable-next-line no-undef
  const url = SEARCH_URL;

  if (!key || !url) {
    // eslint-disable-next-line no-console
    console.warn('To enable search, set API key and URL');
    return;
  }

  let posts;

  if (cache.isCacheGood()) {
    posts = cache.getCache();
  } else {
    const res = await fetch(
      `${url}/ghost/api/content/posts/?limit=all&formats=plaintext&key=${key}`,
    );
    const { posts: postData } = await res.json();
    posts = postData;
    cache.writeCache(posts);
  }

  // Index all documents
  miniSearch.addAll(posts);

  input.addEventListener('input', doSearch);
}
