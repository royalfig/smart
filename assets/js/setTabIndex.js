export default function removeNavLinks() {
  const menuNavLinks = document.querySelectorAll('#sm-menu a');
  menuNavLinks.forEach((el) => el.setAttribute('tabindex', '-1'));
}
