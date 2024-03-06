export default function writeAuthorWebsite() {
  const authorWebsite = document.querySelector('.sm-author-website');

  if (!authorWebsite) return;

  authorWebsite.lastChild.textContent = new URL(
    authorWebsite.textContent,
  ).hostname;
}
