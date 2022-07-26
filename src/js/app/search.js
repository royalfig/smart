import MiniSearch from 'minisearch';

const stopWords = new Set([
  'a',
  'an',
  'another',
  'any',
  'certain',
  'each',
  'every',
  'her',
  'his',
  'its',
  'its',
  'my',
  'no',
  'our',
  'some',
  'that',
  'the',
  'their',
  'this',
  'and',
  'but',
  'or',
  'yet',
  'for',
  'nor',
  'so',
  'as',
  'aboard',
  'about',
  'above',
  'across',
  'after',
  'against',
  'along',
  'around',
  'at',
  'before',
  'behind',
  'below',
  'beneath',
  'beside',
  'between',
  'beyond',
  'but',
  'by',
  'down',
  'during',
  'except',
  'following',
  'for',
  'from',
  'in',
  'inside',
  'into',
  'like',
  'minus',
  'minus',
  'near',
  'next',
  'of',
  'off',
  'on',
  'onto',
  'onto',
  'opposite',
  'out',
  'outside',
  'over',
  'past',
  'plus',
  'round',
  'since',
  'since',
  'than',
  'through',
  'to',
  'toward',
  'under',
  'underneath',
  'unlike',
  'until',
  'up',
  'upon',
  'with',
  'without',
]);

const miniSearch = new MiniSearch({
  fields: ['title', 'plaintext', 'primary_author.name', 'primary_tag.name'], // fields to index for full-text search
  extractField: (document, fieldName) =>
    fieldName.split('.').reduce((doc, key) => doc && doc[key], document),
  storeFields: ['title', 'url'], // fields to return with search results
  searchOptions: {
    prefix: true,
    boost: { title: 2 },
    fuzzy: 0.1,
  },

  // eslint-disable-next-line no-confusing-arrow
  processTerm: (term) => (stopWords.has(term) ? null : term.toLowerCase()),
});

function renderResource(resource) {
  switch (resource) {
    case 'plaintext':
      return 'text';
    case 'primary_tag.name':
      return 'tag';
    case 'primary_author.name':
      return 'author';
    default:
      return 'title';
  }
}

function renderResults(searchResults) {
  const results = searchResults.map(
    (result) =>
      `<a class="sm-search-result-link" href="${result.url}">
      <p class="sm-search-result">${result.title}</p>
      <p class="sm-matching-terms"><span>${renderResource(
        result.match[result.terms[0]][0],
      )}</span></p></a>`,
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
      `${url}/ghost/api/content/posts/?limit=all&include=authors,tags&formats=plaintext&key=${key}`,
    );
    const { posts: postData } = await res.json();
    posts = postData;
    cache.writeCache(posts);
  }

  // Index all documents
  miniSearch.addAll(posts);

  input.addEventListener('input', doSearch);
}
