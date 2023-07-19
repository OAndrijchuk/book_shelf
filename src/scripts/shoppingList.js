import { createBookMarkup, createShopingList } from './shoping-list-markup';
import { FetchBook } from './api';

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(el => el.classList.remove('activ-page'));
menuLinks[1].classList.add('activ-page');
const deleteBookBtn = document.querySelector('.shopping-list-book-btn')
const liItem = document.querySelector('.shopping-list-book-item')


const ids = [
  '643282b1e85766588626a080',
  '643282b2e85766588626a0fc',
  '643282b1e85766588626a0b2',
  '643282b2e85766588626a114',
  '643282b1e85766588626a0ca',
  '643282b1e85766588626a081',
];

localStorage.setItem('bookList', JSON.stringify(ids));

// const shoppingListBtn = document.querySelector('.shopping-link');
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
  const ulSL = document.querySelector('.shopping-list')
  ulSL.addEventListener('click', onDeleteClick)
};
onShoppingClick()
// shoppingListBtn.addEventListener('click', onShoppingClick);

export function onDeleteClick (event) {
  const booksInChart = JSON.parse(localStorage.getItem('bookList')) || null;
  const deletingBookId = event.target.parentNode.parentNode.parentNode.parentNode.dataset.id;
  const bookIdx = booksInChart.indexOf(deletingBookId)
  console.log(bookIdx);
  if (bookIdx !== -1) {
    const splicedBookArr = booksInChart.splice(bookIdx, 1)
    console.log(booksInChart);
    localStorage.setItem('bookList', JSON.stringify(booksInChart))
  }
}




