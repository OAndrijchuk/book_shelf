import iconsSL from '../images/sprite.svg';
import emptyImage from '../images/empty-cont-img.png';

export function createBookMarkup(object) {
  const {
    _id,
    book_image,
    list_name,
    title,
    description,
    author,
    buy_links: [
      amazon,
      apple_books,
      barnes,
      books_a_million,
      bookshop,
      indie_bound,
    ],
  } = object;
  // console.log(amazon.url);
  const markupOfBook = ` 
       <li data-id="${_id}">
      <div class="shopping-list-book-item">
      <img
        class="shopping-list-book-img"
        src="${book_image}"
        alt="Image of ${title}"
      />
       <div class="shopping-list-book-text">

      <h2 class="shopping-list-book-title">${title}</h2>
      <p class="shopping-list-book-category">${list_name}</p>

      <p class="shopping-list-book-description">${description || 'Description is empty'}</p>
      <p class="shopping-list-book-author">${author}</p>
      
       <div class="shopping-list-book-links">

    <a class="test-link" href="${amazon.url}"><svg width="32" height="11" class="shopping-list-amazon">
      <use href="${iconsSL}#icon-amazon"></use>
      </svg></a>
    <a class="test-link" href="${apple_books.url}"><svg   width="16" height="16" class="shopping-list-apple"><use href="${iconsSL}#icon-apple-books-logo"></use></svg></a>
    <a class="test-link" href="${bookshop.url}"><svg width="16" height="16" class="shopping-list-bookshop"><use href="${iconsSL}#icon-book-shops-logo"></use></svg></a>
       </div>
      <button class="shopping-list-book-btn">
      <svg class="shopping-list-book-btn-icon" width="16" height="16"><use href="${iconsSL}#icon-trash"></use></svg></button>
    </div>
  
    </div>
    
    </li>
  `;
  // console.log(markupOfBook);
  return markupOfBook;
}
// <a href="${amazon.url}"></a>
//       <a href="${apple_books.url}"></a>
//       <a href="${bookshop.url}"></a>
export function createShopingList(arrayOfBooks) {
  let result;
  if (arrayOfBooks.length === 0) {
    result = createEmptyBackground();
  } else {
    const mappedBooks = arrayOfBooks.join('');
    result = `
  <div class="container grid-wrapper shopping-list-container">
    <h2 class="shop-list-title">Shopping <span class="shop-list-title-span">List</span></h2>
    <ul class="shopping-list">${mappedBooks}</ul>
  </div>`;
  }
  return result;
}

export function createEmptyBackground() {
  return `
    <div class="container grid-wrapper shopping-list-container">
      <h2 class="shop-list-title">Shopping <span class="shop-list-title-span">List</span></h2>
      <div class="shop-list-empty-container">
        <p class="shop-list-empty-paragraph">This page is empty, add some books and proceed to order.</p>
        <img class="shop-list-empty-img" src="${emptyImage}" alt="Books in empty section"/>
      </div>
    </div>`;
}
