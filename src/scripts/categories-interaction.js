import { FetchBook } from './api';
import { createCategorieTpl } from './categorie-tpl';
import { createCardTpl } from './card-tpl';
import { updateScreenWidth } from './best-books';

const asideList = document.querySelector('.aside-list');
const container = document.querySelector('.cont-section');
const categoriesListName = document.querySelector('.categories-list-name');
const getLoaderEl = document.querySelector('.loader-inner');

const fetchBook = new FetchBook();

function changeColor() {
  asideList.addEventListener('click', onCategoryClick);
  categoriesListName.addEventListener('click', event => {
    const asideLink = document.querySelectorAll('.aside-link');

    asideLink.forEach(item => {
      item.classList.remove('activ-name');
    });

    event.target.classList.add('activ-name');
    updateScreenWidth();
    scrollToSecton(event);
  });
}

changeColor();

function createBookCategories() {
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

createBookCategories();

function createCategogiesMarkup(listMap) {
  asideList.insertAdjacentHTML('beforeend', listMap);
}

function onCategoryClick(event) {
  event.preventDefault();

  const { target } = event;
  if (!target.classList.contains('aside-link')) {
    return;
  }

  scrollToSecton(event);

  categoriesListName.classList.remove('activ-name');
  const asideLink = document.querySelectorAll('.aside-link');

  asideLink.forEach(item => {
    item.classList.remove('activ-name');
  });

  target.classList.add('activ-name');
  const searchQuery = target.textContent;
  chooseCategory(searchQuery);
}

function searchCategoryText(categoryName) {
  const asideLink = document.querySelectorAll('.aside-link');
  categoriesListName.classList.remove('activ-name');

  asideLink.forEach(item => {
    item.classList.remove('activ-name');

    if (item.textContent === categoryName) {
      item.classList.add('activ-name');
    }
  });
}

export function chooseCategory(searchQuery) {
  searchCategoryText(searchQuery);
  getLoaderEl.style.display = 'flex';

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
    })
    .finally(() => {
      getLoaderEl.style.display = 'none';
    });
}

function createCardMarkup(listMap, searchQuery) {
  const wordsArray = searchQuery.split(' ');
  const lastWord = wordsArray[wordsArray.length - 1];

  const coloredSpan = document.createElement('span');
  coloredSpan.textContent = lastWord;
  coloredSpan.style.color = '#4F2EE8';

  const highlightedQuery = searchQuery.replace(lastWord, coloredSpan.outerHTML);

  container.innerHTML = `<div class="container grid-wrapper">
  <h1 class="books-section-title" id="section-title"">${highlightedQuery}</h1>
  <ul class="card-list">${listMap}</ul>
  </div>`;
}

//! --------------------
function scrollToSecton(event) {
  const getSectionId = document.querySelector(
    '#' + event.target.dataset.scroll
  );

  const sectionTop = getSectionId.offsetTop;

  window.scrollTo({
    top: sectionTop,
    behavior: 'smooth',
  });
}
