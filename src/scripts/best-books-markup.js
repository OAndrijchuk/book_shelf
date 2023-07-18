function renderTopBooksItem(topBooksItem) {
  const { list_name, books } = topBooksItem;

  const topBooksCards = books
    .map(({ title, author, book_image }) => {
      return ` <li class="overlay card-item">
       <div loading="lazy" class="book-image" style="background-image: url(${book_image})"></div>
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

export function renderTopBooksList(topBooksList, amount) {
  const mappingTopBooksList = topBooksList.map(({ list_name, books }) => {
    return {
      list_name,
      books: books.slice(0, amount)
    }
  }).slice(0,4) // Убрать если не надо обрезать .slice(0,4)
  return mappingTopBooksList.map(renderTopBooksItem).join('');
}
