import { FetchBook } from './api';
import {renderTopBooksList} from './best-books-markup'
const bestBookList = document.querySelector('.best-book-list');
const fetchBook = new FetchBook();

async function getTopBooks() {
  try {
    const res = await fetchBook.fetchElement('/top-books');
    createTopBooksListMarkup(res);
  } catch (error) {
    console.log(error);
  }
}

function createTopBooksListMarkup(topBooksList) {
  bestBookList.insertAdjacentHTML('beforeend', renderTopBooksList(topBooksList));
}

// Виклик функції
getTopBooks();






