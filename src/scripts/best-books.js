import { FetchBook } from './api';
import { renderTopBooksList } from './best-books-markup';
import { chooseCategory } from './categories-interaction';
const topBooksSection = document.querySelector('.cont-section');
const getLoaderEl = document.querySelector('.loader-inner');
const fetchBook = new FetchBook();
const widthScreen = window.innerWidth;

let resizeTimeout;

function clearTopBooksListMarkup() {
  topBooksSection.innerHTML = '';
}
async function getTopBooks(amount) {
  try {
    getLoaderEl.style.display = 'flex';
    clearTopBooksListMarkup();
    const res = await fetchBook.fetchElement('/top-books');
    createTopBooksListMarkup(res, amount);
  } catch (error) {
    console.log(error);
  } finally {
    getLoaderEl.style.display = 'none';
  }
}

function createTopBooksListMarkup(topBooksList, amount) {
  const markup = renderTopBooksList(topBooksList, amount);
  topBooksSection.insertAdjacentHTML('beforeend', markup);
}

export function updateScreenWidth() {
  const width = window.innerWidth;
  topBooksSection.addEventListener('click', onSeeMoreBtn);

  function onSeeMoreBtn(event) {
    const listName = event.target.dataset.listname;
    chooseCategory(listName);

    let scrollPosition = 0;
    if (widthScreen >= 1440) {
      scrollPosition;
    } else {
      scrollPosition = 640;
    }
    window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
  }

  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }
  resizeTimeout = setTimeout(() => {
    window.removeEventListener('resize', updateScreenWidth);

    if (width >= 1440) {
      getTopBooks(5);
    } else if (width >= 768) {
      getTopBooks(3);
    } else {
      getTopBooks(1);
    }
    window.addEventListener('resize', updateScreenWidth);
  }, 300);
}

updateScreenWidth();
window.addEventListener('resize', updateScreenWidth);
