export function createCardTpl(categories) {
  return categories
    .map(({ list_name }) => {
      return `
      <li class="nav-item">
        <a class="nav-link" href="#">${list_name}</a>
      </li>`;
    })
    .join('');
}
