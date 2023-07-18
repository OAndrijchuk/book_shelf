import { FetchBook } from './api';
import { createCardTpl } from './categories-tpl';
const navList = document.querySelector('.nav-list');

const fetchBook = new FetchBook();

fetchBook
  .fetchElement('/category-list')
  .then(categories => {
    createCardMarkup(categories);
  })
  .catch(error => {
    console.warn(error);
  });

function createCardMarkup(list) {
  navList.insertAdjacentHTML('beforeend', createCardTpl(list));
}
