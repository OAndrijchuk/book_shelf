export function createCardTpl(card) {
  const { book_image, title, author, _id } = card;
  return `
    <li class="cards-item">
      <div class="cards-link" data-id="${_id}">
        <div class="cards-header">
          <img class="cards-img" src="${book_image}" alt="${title}" data-id />
        </div>
        <div class="cards-content">
          <h2 class="cards-title">${title}</h2>
          <p class="cards-author">${author}</p>
        </div>
      </div>
    </li>`;
}
