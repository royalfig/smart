function pathnameParser(pathname) {
  if (!/page/.test(pathname)) {
    return pathname;
  }

  return pathname.split('page')[0];
}

export default function generatePagination() {
  const pagination = document.querySelector('.sm-pagination');

  if (!pagination) return;
  const pathname = pathnameParser(window.location.pathname);
  const { pages, page, prev, next } = pagination.dataset;

  const previousButton = document.createElement('a');
  previousButton.innerHTML =
    '<svg aria-hidden="true"><use href="#sm-left-arrow-icon"></use></svg>';
  previousButton.classList.add('sm-circle-icon-button');

  if (prev) {
    previousButton.setAttribute('aria-label', 'previous posts');
    previousButton.setAttribute('href', prev);
  } else {
    previousButton.setAttribute('disabled', 'true');
  }

  pagination.append(previousButton);

  for (let index = 0; index < pages; index += 1) {
    let urlPath;

    if (index === 0 && pathname === '/') {
      urlPath = '/';
    } else if (index === 0 && pathname !== '/') {
      urlPath = pathname;
    } else {
      urlPath = `${pathname}page/${index + 1}/`;
    }

    const div = document.createElement('div');
    div.classList.add('sm-pagination-item');
    const a = document.createElement('a');
    a.setAttribute('href', urlPath);
    a.textContent = index + 1;

    if (+page === index + 1) {
      div.classList.add('sm-current');
    }
    div.append(a);
    pagination.append(div);
  }
  const nextButton = document.createElement('a');
  nextButton.innerHTML =
    '<svg aria-hidden="true"><use href="#sm-right-arrow-icon"></use></svg>';
  nextButton.classList.add('sm-circle-icon-button');
  if (next) {
    nextButton.setAttribute('aria-label', 'next posts');
    nextButton.setAttribute('href', next);
  } else {
    nextButton.setAttribute('disabled', 'true');
  }

  pagination.append(nextButton);
}
