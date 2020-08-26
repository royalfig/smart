import '../scss/style.scss';
import search from './search';
import modalFn from './modal';
import toast from './toast';

import 'lazysizes';

// Polyfill forEach
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// eslint-disable-next-line no-undef
if (typeof SEARCH_API !== 'undefined') {
  search();
}

modalFn();

/**
 * Grid styles
 * * Counts & adds the number of items to the grid container
 */
const gridContainers = document.querySelectorAll('.grid-container-home');

gridContainers.forEach((element) => {
  const gridItems = element.querySelectorAll('.card');

  element.classList.add(`grid-container-home-${gridItems.length}`);
});

/**
 * Color mode toggle
 * ? Is the color mode button hidden on unsupported browsers?
 */
const toggleColorBtns = document.querySelectorAll('.color-mode-btn');

if (window.CSS && CSS.supports('color', 'var(--primary)')) {
  const toggleColorMode = (e) => {
    if (e.currentTarget.classList.contains('light')) {
      document.documentElement.setAttribute('color-mode', 'light');
      localStorage.setItem('pref', 'light');
      return;
    }
    document.documentElement.setAttribute('color-mode', 'dark');
    localStorage.setItem('pref', 'dark');
  };
  toggleColorBtns.forEach((btn) => {
    btn.addEventListener('click', toggleColorMode);
  });
} else {
  toggleColorBtns.forEach((e) => {
    e.style.display = 'none';
  });
}

/**
 * Member annual price discount check
 * * Checks whether annual price is better than monthly and adds a span with the discount info
 */
const extractNumber = (input) => {
  const num = /\d+/.exec(input)[0];
  return parseInt(num, 10);
};

const yearEl = document.getElementById('yearly-price');

if (yearEl) {
  const yearlyPrice = extractNumber(yearEl.textContent);

  const monthlyPrice = extractNumber(
    document.getElementById('monthly-price').textContent
  );

  const calculatePercentageDiscount = (monthToYear, year) => {
    const diff = monthToYear - year;
    const percentage = ((diff * 100) / monthToYear).toFixed();
    return `${percentage}%`;
  };

  const determineDiscount = (month, year) => {
    const monthlyToAnnual = month * 12;
    if (year < monthlyToAnnual) {
      const percentageDiscount = calculatePercentageDiscount(
        monthlyToAnnual,
        year
      );
      const percentOffEl = document.createElement('p');
      percentOffEl.classList.add('member__discount');
      const percentOffText = `${percentageDiscount} off the monthly price!`;
      percentOffEl.append(percentOffText);
      yearEl.parentElement.append(percentOffEl);
    }
  };

  if (monthlyPrice && yearlyPrice) {
    determineDiscount(monthlyPrice, yearlyPrice);
  }
}

// Hero -> Contact
const contactEl = document.querySelector('.hero__contact');

const navLinks = document.querySelectorAll('.navigation__list-link');

if (contactEl && navLinks) {
  // eslint-disable-next-line no-restricted-syntax
  for (const el of navLinks) {
    if (el.pathname === '/contact/') {
      contactEl.style.display = 'block';
      break;
    }
  }
}
