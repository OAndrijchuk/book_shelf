import './changeTheam';
import './mobile-menu';
import './authLogic';
import './support';
import './registration-modal';
import { addToFierbase } from './registration-modal';
import {
  createBookMarkup,
  createEmptyBackground,
  createShopingList,
} from './shoping-list-markup';
import { FetchBook } from './api';
import { Options } from 'smooth-scrollbar/options';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const buttonBag = document.querySelector('.shopping-list-book-btn');
const mobileLinks = document.querySelectorAll('.mob-menu-link');
mobileLinks.forEach(el => el.classList.remove('activ-page'));
mobileLinks[1].classList.add('activ-page');

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(el => el.classList.remove('activ-page'));
menuLinks[1].classList.add('activ-page');
const container = document.querySelector('.cont-section');

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
const containerTui = document.getElementById('tui-pagination-container');

const itemsPerPage = 3;
let currentPage = 1;

const booksInChart = JSON.parse(localStorage.getItem('bookList')) || [];

const options = {
  totalItems: booksInChart.length,
  itemsPerPage,
  visiblePages: 3,
  page: currentPage,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(containerTui, options);

const onShoppingClick = async event => {
  const booksInChart = JSON.parse(localStorage.getItem('bookList')) || [];

  const booksArrCopy = [...booksInChart];
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const chunk = booksArrCopy.slice(startIndex, endIndex);

  const bookMarkupsArr = [];
  for (let i = 0; i < chunk.length; i += 1) {
    const book = chunk[i];

    try {
      const bookData = await new FetchBook().fetchElement(book);
      const bookMarkup = createBookMarkup(bookData);
      bookMarkupsArr.push(bookMarkup);
    } catch (error) {
      console.warn(`Error fetching book with ID ${book}: ${error.message}`);
    }
  }

  container.innerHTML = createShopingList(bookMarkupsArr);

  if (booksInChart.length !== 0) {
    const ulSL = document.querySelector('.shopping-list');
    ulSL.addEventListener('click', onDeleteClick);
  }
};

onShoppingClick();

pagination.on('beforeMove', event => {
  const next = event.page;
  currentPage = next;
  onShoppingClick();
});

pagination.on('afterMove', event => {
  const prev = event.page;
  currentPage = prev;
  onShoppingClick();
});

export function onDeleteClick(event) {
  const allLiEl = [...document.querySelectorAll('.li-item')];
  const booksInChart = JSON.parse(localStorage.getItem('bookList')) || null;
  const deletingBookId = event.target.dataset.id;
  const bookIdx = booksInChart.indexOf(deletingBookId);
  console.log(bookIdx);
  if (bookIdx !== -1) {
    booksInChart.splice(bookIdx, 1);
    localStorage.setItem('bookList', JSON.stringify(booksInChart));
    allLiEl.find(el => el.dataset.id === deletingBookId).remove();
    Notify.info('Book successfully deleted from your chart');
  }
  if (booksInChart.length === 0) {
    container.innerHTML = createEmptyBackground();
  }

  if (pagination.getCurrentPage() !== Math.ceil(booksInChart.length / 3)) {
    pagination.reset(booksInChart.length);
    pagination.movePageTo(Math.ceil(booksInChart.length / 3));
  }

  onShoppingClick();
  addToFierbase();
}
