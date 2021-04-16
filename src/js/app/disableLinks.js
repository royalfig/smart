const disableLinks = (el) => {
  const linksToDisable = el.querySelectorAll('a');
  linksToDisable.forEach((link) => {
    link.setAttribute('tabindex', '-1');
  });
};

module.exports = disableLinks;
