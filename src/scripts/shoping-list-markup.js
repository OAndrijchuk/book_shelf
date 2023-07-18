export function createBookMarkup(object) {
  const {
    _id,
    book_image,
    list_name,
    title,
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
  console.log(amazon.url);
  const markupOfBook = ` 
 <h2 class="shop-list-title">Shopping<span class="shop-list-title-span">List</span></h2>  
 <ul>
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

      <p class="shopping-list-book-description">Description</p>
      <p class="shopping-list-book-author">${author}</p>
      
       <div class="shopping-list-book-links">

      <a href="${amazon.url}">Amazon <svg id="icon-amazon" class="shopping-list-amazon"></svg></a>
       <a href="${apple_books.url}">AppleBooks <svg id="icon-apple-books-logo" class="shopping-list-apple"></svg></a>
       <a href="${bookshop.url}">BookShop <svg id="icon-book-shops-logo" class="shopping-list-apple"></svg></a>
       </div>
      <button class="shopping-list-book-btn">
      <img class="shopping-list-book-icon" src="./dump.png" alt=""></button>
    </div>
  
    </div>
    
    </li>
      <li data-id="${_id}"><div class="shopping-list-book-item">
      <img
        class="shopping-list-book-img"
        src="${book_image}"
        alt="Image of ${title}"
      />
      <h2 class="shopping-list-book-title">${title}</h2>
      <p class="shopping-list-book-category">${list_name}</p>

      <p class="shopping-list-book-description">Description</p>
      <p class="shopping-list-book-author">${author}</p>
      
      
      <a href="${amazon.url}">Amazon <svg id="icon-amazon" class="shopping-list-amazon"></svg></a>
       <a href="${apple_books.url}">AppleBooks <svg id="icon-apple-books-logo" class="shopping-list-apple"></svg></a>
       <a href="${bookshop.url}">BookShop <svg id="icon-book-shops-logo" class="shopping-list-apple"></svg></a>
      
    </div></li>
      <li data-id="${_id}"><div class="shopping-list-book-item">
      <img
        class="shopping-list-book-img"
        src="${book_image}"
        alt="Image of ${title}"
      />
      <h2 class="shopping-list-book-title">${title}</h2>
      <p class="shopping-list-book-category">${list_name}</p>

      <p class="shopping-list-book-description">Description</p>
      <p class="shopping-list-book-author">${author}</p>
      
      
      <a href="${amazon.url}">Amazon <svg id="icon-amazon" class="shopping-list-amazon"></svg></a>
       <a href="${apple_books.url}">AppleBooks <svg id="icon-apple-books-logo" class="shopping-list-apple"></svg></a>
       <a href="${bookshop.url}">BookShop <svg id="icon-book-shops-logo" class="shopping-list-apple"></svg></a>
      
    </div></li>
    </ul> 
  `;
  // console.log(markupOfBook);
  return markupOfBook;
}
// <a href="${amazon.url}"></a>
//       <a href="${apple_books.url}"></a>
//       <a href="${bookshop.url}"></a>
export function createShopingList(arrayOfBooks) {
  for (const book of arrayOfBooks) {
    createBookMarkup();
  }
}
