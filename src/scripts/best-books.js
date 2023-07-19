import { FetchBook } from './api';
import {renderTopBooksList} from './best-books-markup'
const bestBookList = document.querySelector('.best-book-list');
const getLoaderEl = document.querySelector('.loader-inner');
const fetchBook = new FetchBook();

let resizeTimeout; 

function clearTopBooksListMarkup() {
  bestBookList.innerHTML = ''; 
}
async function getTopBooks(amount) {
  try {
    getLoaderEl.style.display = 'flex'
    clearTopBooksListMarkup(); 
    const res = await fetchBook.fetchElement('/top-books');
    createTopBooksListMarkup(res, amount);
  } catch (error) {
    console.log(error);
  } finally {
    getLoaderEl.style.display = 'none'
  }
}


function createTopBooksListMarkup(topBooksList, amount) {
  const markup = renderTopBooksList(topBooksList, amount);
  bestBookList.insertAdjacentHTML('beforeend', markup);
}

function updateScreenWidth() {
  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }
  resizeTimeout = setTimeout(() => {
    const width = window.innerWidth;
    window.removeEventListener('resize', updateScreenWidth);
  
    if (width > 996) {
      getTopBooks(5);
    } else if (width >= 768 && width <= 995) {
      getTopBooks(3);
    } else if (width <= 767) {
      getTopBooks(1);
    }
    window.addEventListener('resize', updateScreenWidth);
  }, 300);
}

updateScreenWidth();
window.addEventListener('resize', updateScreenWidth);









