import { FetchBook } from './api';
import { createCategorieTpl } from './categorie-tpl';
import { createCardTpl } from './card-tpl';

const asideList = document.querySelector('.aside-list');
const container = document.querySelector('.cont-section');

const fetchBook = new FetchBook();

asideList.addEventListener('click', onCategoryClick);

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
  asideList.insertAdjacentHTML('beforeend', listMap);
}

function onCategoryClick({ target }) {
  if (!target.classList.contains('aside-link')) {
    return;
  }
  const searchQuery = target.textContent;

  chooseCategory(searchQuery);
}

export function chooseCategory(searchQuery) {
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
  const wordsArray = searchQuery.split(' ');
  const lastWord = wordsArray[wordsArray.length - 1];

  const coloredSpan = document.createElement('span');
  coloredSpan.textContent = lastWord;
  coloredSpan.style.color = '#4F2EE8';

  const highlightedQuery = searchQuery.replace(lastWord, coloredSpan.outerHTML);

  container.innerHTML = `<div class="container">
  <h1 class="books-section-title">${highlightedQuery}</h1>
  <ul class="card-list">${listMap}</ul>
  </div>`;
}
