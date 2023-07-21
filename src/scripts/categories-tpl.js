export function createCardTpl(categories) {
  return categories
    .map(({ list_name }) => {
      return `
      <li class="aside-item">
        <a class="aside-link" href="#">${list_name}</a>
      </li>`;
    })
    .join('');
}
