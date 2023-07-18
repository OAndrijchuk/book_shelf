export function createCardTpl(card) {
  const { book_image, title, author, amazon_product_url, _id } = card;
  return `
    <li class="card-item">
      <a class="card-link" href="${amazon_product_url}" target="_blank" data-id="${_id}">
        <div class="card-header">
          <img class="card-img" src="${book_image}" alt="${title}" data-id />
        </div>
        <div class="card-content">
          <h2 class="card-title">${title}</h2>
          <p class="card-author">${author}</p>
        </div>
      </a>
    </li>`;
}
