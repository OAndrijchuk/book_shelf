const openModalBtn = document.querySelectorAll('[data-order-open]');
const closeModalBtn = document.querySelector('[data-order-close]');
const modal = document.querySelector('[data-order]');
const backdrop = document.querySelector('[data-order-backdrop]');
const icon = document.querySelector('.modal-close-icon');

openModalBtn.forEach(btn => {
  btn.addEventListener('click', onOpenModalBtnClick);
});

closeModalBtn.addEventListener('click', onCloseBtnClick);
backdrop.addEventListener('click', onCloseBtnClick);
icon.addEventListener('click', onCloseBtnClick);

function onOpenModalBtnClick() {
  backdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open'); // Добавление класса для запрета прокрутки
  window.addEventListener('keydown', onEscBtnPush);
}

function onCloseBtnClick(event) {
  const isClickOnBackdrop = event.target !== backdrop;
  const isClickOnCloseModalBtn = event.target !== closeModalBtn;
  const isEscape = event.code !== 'Escape';
  const isIcon = event.target !== icon;
  const isIconParentNode = event.target.parentNode !== icon;

  const isCloseModal =
    isClickOnBackdrop &&
    isClickOnCloseModalBtn &&
    isEscape &&
    isIcon &&
    isIconParentNode;
  if (isCloseModal) {
    return;
  }

  console.log(event);
  backdrop.classList.add('is-hidden');
  document.body.classList.remove('modal-open'); // Удаление класса для разрешения прокрутки
  window.removeEventListener('keydown', onEscBtnPush);
}

function onEscBtnPush(event) {
  if (event.code === 'Escape') {
    onCloseBtnClick(event);
  }
}
