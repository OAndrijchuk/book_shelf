export function createBookMarkup(object) {
  const {
    book_image,
    list_name,
    title,
    author,
    buy_links: amazon,
    apple_books,
    barnes,
    books_a_million,
    bookshop,
    indie_bound,
  } = object;

  const markupOfBook = `    
  <div class="shopping-list-book-item">
      <img
        class="shopping-list-book-img"
        src="${book_image}"
        alt="Image of ${title}"
      />
      <h2 class="shopping-list-book-title">${title}</h2>
      <p class="shopping-list-book-category">${list_name}</p>

      <p class="shopping-list-book-description">Description</p>
      <p class="shopping-list-book-author">${author}</p>
      
      
    </div>`;
  console.log(markupOfBook);
  return markupOfBook;
}
// <a href="${amazon.url}"></a>
//       <a href="${apple_books.url}"></a>
//       <a href="${bookshop.url}"></a>
