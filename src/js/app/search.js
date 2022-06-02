import MiniSearch from 'minisearch';

export async function getPosts() {
  const key = 'c9f8e55c699cf3217dfbc4e48a';
  const url = 'http://localhost:2368';

  const res = await fetch(
    `${url}/ghost/api/content/posts/?limit=all&formats=plaintext&key=${key}`,
  );
  const { posts } = await res.json();

  let miniSearch = new MiniSearch({
    fields: ['title', 'plaintext'], // fields to index for full-text search
    storeFields: ['title', 'url'], // fields to return with search results
  });

  // Index all documents
  miniSearch.addAll(posts);

  // Search with default options
  let results = miniSearch.search('madurai chicken');

  console.log(results);
}
