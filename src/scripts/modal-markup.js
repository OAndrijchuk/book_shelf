import { onOpenModalBtnClick } from './modal';
import { FetchBook } from './api';
import icons from '../images/sprite.svg';
const fetchBook = new FetchBook();
const modalWrapper = document.querySelector('.modal-wrapper');
const contSection = document.querySelector('.cont-section');
const backdrop = document.querySelector('.backdrop');
contSection.addEventListener('click', onClickWrapper);

async function onClickWrapper(event) {
  console.dir(event.target);
  if (!event.target.dataset.id) {
    return;
  }
  onOpenModalBtnClick();
  const fetchedBook = await fetchBook.fetchElement(
    `/${event.target.dataset.id}`
  );
  const { book_image, title, author, description } = fetchedBook;
  const { url: amazon } = fetchedBook.buy_links[0];
  const { url: apple } = fetchedBook.buy_links[1];
  const { url: bookShop } = fetchedBook.buy_links[4];
  console.log(fetchedBook);
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
  console.dir(fetchedBookMarkup);
  modalWrapper.innerHTML = fetchedBookMarkup;
}
