import { FetchBook } from './api';
import { createCategorieTpl } from './categorie-tpl';
import { createCardTpl } from './card-tpl';

const navList = document.querySelector('.nav-list');
const cardList = document.querySelector('.card-list');
const booksSection = document.querySelector('.books-section');
const container = document.querySelector('.cont-section');

const fetchBook = new FetchBook();

navList.addEventListener('click', onCategoryClick);

function createBookCategogies() {
  fetchBook
    .fetchElement('/category-list')
    .then(categories => {
      const categoryRender = categories
        .map(categorie => createCategorieTpl(categorie))
        .join('');
      createCategogiesMarkup(categoryRender);
    })
    .catch(error => {
      console.warn(error);
    });
}

createBookCategogies();

function createCategogiesMarkup(listMap) {
  navList.insertAdjacentHTML('beforeend', listMap);
}

function onCategoryClick({ target }) {
  if (target.nodeName !== 'A' || !target.classList.contains('nav-link')) {
    return;
  }
  const searchQuery = target.textContent;

  fetchBook
    .fetchElement(`/category?category=${searchQuery}`)
    .then(categories => {
      const categoryRender = categories
        .map(categorie => createCardTpl(categorie))
        .join('');
      createCardMarkup(categoryRender, searchQuery);
    })
    .catch(error => {
      console.warn(error);
    });
}

function createCardMarkup(listMap, searchQuery) {
  container.innerHTML = `<div class="container">
  <h1 class="books-section-title">${searchQuery}</h1>
  <ul class="card-list">${listMap}</ul>
  </div>`;
}

function clearCardMarkup() {
  cardList.innerHTML = '';
}
