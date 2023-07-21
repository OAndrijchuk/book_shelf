import { onOpenModalBtnClick } from './modal';
import { FetchBook } from './api';
import icons from '../images/sprite.svg';
const fetchBook = new FetchBook();
const modalWrapper = document.querySelector('.modal-wrapper');
const contSection = document.querySelector('.cont-section');
const backdrop = document.querySelector('.backdrop');
contSection.addEventListener('click', onClickWrapper);

async function onClickWrapper(event) {
  event.preventDefault();
  if (!event.target.dataset.id) {
    return;
  }
  onOpenModalBtnClick();
  const fetchedBook = await fetchBook.fetchElement(
    `/${event.target.dataset.id}`
  );
  console.log(fetchedBook);
  const { book_image, title, author, description } = fetchedBook;
  const { url: amazon } = fetchedBook.buy_links[0];
  const { url: apple } = fetchedBook.buy_links[1];
  const { url: bookShop } = fetchedBook.buy_links[4];
  const fetchedBookMarkup = `<img
          class="modal-image"
          src="${book_image}"
          alt=""
      />
      <ul class="modal-list">
        <li><h2 class="modal-list-title">${title}</h2></li>
        <li><h3 class="modal-list-autor">${author}</h3></li>
        <li>
          <p class="modal-description">
            ${description}
          </p>
        </li>
        <div class="modal-shop-icons">
          <li>
          <a href="${amazon}" target="_blank" rel="noopener nofollow noreferrer"><svg class="modal-shop-item" width="44" height="36">
              <use href="${icons}#icon-amazon"></use>
            </svg></a>
          </li>
          <li>
             <a href="${apple}" target="_blank" rel="noopener nofollow noreferrer"><svg class="modal-shop-item" width="44" height="36">
              <use href="${icons}#icon-apple-books-logo"></use>
            </svg></a>
          </li>
          <li>
             <a href="${bookShop}" target="_blank" rel="noopener nofollow noreferrer"><svg class="modal-shop-item" width="44" height="36">
              <use href="${icons}#icon-book-shops-logo"></use>
            </svg></a>
          </li>
            </div>
      </ul>`;

  modalWrapper.innerHTML = fetchedBookMarkup;

  markapBtn(event.target.dataset.id);
}

function markapBtn(id) {
  let bookList = JSON.parse(localStorage.getItem('bookList'));

  const btnContainer = document.querySelector('.btn-container');
  if (!Array.isArray(bookList) || !bookList) {
    bookList = [];
  }

  if (bookList.includes(id)) {
    btnContainer.innerHTML = removeBtnMarkup(id);
    const removeBtn = document.querySelector('.js-removeBtn');
    removeBtn.addEventListener('click', removeBookFromLokalStoreg);
  } else {
    btnContainer.innerHTML = addBtnMarkup(id);
    const addBtn = document.querySelector('.js-addBtn');
    addBtn.addEventListener('click', addBookFromLokalStoreg);
  }

  function removeBookFromLokalStoreg(event) {
    localStorage.setItem(
      'bookList',
      JSON.stringify(bookList.filter(el => el !== id))
    );
    markapBtn(id);
    event.currentTarget.removeEventListener('click', removeBookFromLokalStoreg);
  }
  function addBookFromLokalStoreg(event) {
    bookList.push(id);
    localStorage.setItem('bookList', JSON.stringify(bookList));
    markapBtn(id);
    event.currentTarget.removeEventListener('click', addBookFromLokalStoreg);
  }
}

function addBtnMarkup(id) {
  return `<button class="modal-active-btn js-addBtn" data-id="${id}">
      add to shopping list
    </button>`;
}
function removeBtnMarkup(id) {
  return `<button class="modal-active-btn js-removeBtn" data-id="${id}">
      remove from the shopping list
    </button>
    <p class="modal-congratulations-text">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button “Remove from the shopping list”.
    </p>`;
}
