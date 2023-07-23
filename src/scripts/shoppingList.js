import './changeTheam';
import './mobile-menu';
import './support';
import './registration-modal';
import { addToFierbase } from './registration-modal';
import {
  createBookMarkup,
  createEmptyBackground,
  createShopingList,
} from './shoping-list-markup';
import { FetchBook } from './api';

const mobileLinks = document.querySelectorAll('.mob-menu-link');
mobileLinks.forEach(el => el.classList.remove('activ-page'));
mobileLinks[1].classList.add('activ-page');

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(el => el.classList.remove('activ-page'));
menuLinks[1].classList.add('activ-page');

const container = document.querySelector('.cont-section');
const bookMarkupsArr = [];
const onShoppingClick = async event => {
  const booksInChart = JSON.parse(localStorage.getItem('bookList')) || null;

  for (const book of booksInChart) {
    const bookData = await new FetchBook().fetchElement(book);
    const bookMarkup = createBookMarkup(bookData);
    bookMarkupsArr.push(bookMarkup);
  }

  container.innerHTML = createShopingList(bookMarkupsArr);

  if (booksInChart.length !== 0) {
    const ulSL = document.querySelector('.shopping-list');
    ulSL.addEventListener('click', onDeleteClick);
  }
};

onShoppingClick();

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
  }
  if (booksInChart.length === 0) {
    container.innerHTML = createEmptyBackground();
  }
  addToFierbase();
}
