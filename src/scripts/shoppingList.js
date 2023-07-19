import { createBookMarkup, createShopingList } from './shoping-list-markup';
import { FetchBook } from './api';
import axios from 'axios';

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(el => el.classList.remove('activ-page'));
menuLinks[1].classList.add('activ-page');

const ids = [
  '643282b1e85766588626a080',
  '643282b2e85766588626a0fc',
  '643282b1e85766588626a0b2',
];

localStorage.setItem('bookList', JSON.stringify(ids));

const shoppingListBtn = document.querySelector('.shopping-link');
const container = document.querySelector('.cont-section');

const onShoppingClick = async event => {
  const booksInChart = JSON.parse(localStorage.getItem('bookList')) || null;

  const bookMarkups = [];

  for (const book of booksInChart) {
    const bookData = await new FetchBook().fetchElement(book);
    const bookMarkup = createBookMarkup(bookData);
    bookMarkups.push(bookMarkup);
  }

  container.innerHTML = createShopingList(bookMarkups);
};

shoppingListBtn.addEventListener('click', onShoppingClick);
