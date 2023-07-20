const mobileMenu = document.querySelector('.mobile-menu-nav');
const burgerBtn = document.querySelector('.burger-menu');
const burgerIco = document.querySelector('.burger-menu-svg');
const closeIco = document.querySelector('.close-menu-icon-cont');

burgerBtn.addEventListener('click', showMobileMenu);

function showMobileMenu(event) {
  document.body.classList.toggle('modal-open');
  burgerIco.classList.toggle('visually-hidden');
  closeIco.classList.toggle('visually-hidden');
  mobileMenu.classList.toggle('is-open');
}
// style="overflow: hidden;"
