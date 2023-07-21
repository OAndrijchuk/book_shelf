export function createCategorieTpl({ list_name }) {
  return `
      <li class="aside-item">
        <a class="aside-link" href="#section-title">${list_name}</a>
      </li>`;
}
