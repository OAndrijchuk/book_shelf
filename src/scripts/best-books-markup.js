const viewportWidth = window.innerWidth;
let booksPerCategory = 5;

if (viewportWidth < 1440 && viewportWidth >= 768) {
  booksPerCategory = 3;
} else if (viewportWidth < 768) {
  booksPerCategory = 1;
}

function renderTopBooksItem(topBooksItem) {
  const { list_name, books } = topBooksItem;

  const topBooksCards = books
    .map(({ title, author, book_image }) => {
      return ` <li class="overlay card-item">
       <img loading="lazy" src="${book_image}" alt="" class="book-image" />
    <p class="hover-text">quick view</p>
      <h4 class="book-subtitle">${title}</h4>
    <p class="book-autor">${author}</p>
    </li>
  `;
    })
    .join('');

  return `<li class="book-item">
    <h3 class="book-title">${list_name}</h3> 
    <ul class="book-info">${topBooksCards}</ul>
    </li>
    <button type="button" class="more-btn">see more</button>
   `;
}

export function renderTopBooksList(topBooksList) {
  return topBooksList.map(renderTopBooksItem).join('');
}
