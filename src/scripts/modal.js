const openModalBtn = document.querySelectorAll('[data-order-open]');
const closeModalBtn = document.querySelector('[data-order-close]');
const modal = document.querySelector('[data-order]');
const backdrop = document.querySelector('[data-order-backdrop]');
const icon = document.querySelector('.modal-close-icon');

let scrollPosition = 0;
window.addEventListener('scroll', function (event) {
  if (!document.body.classList.contains('modal-open')) {
    scrollPosition = window.pageYOffset;
  }
});

closeModalBtn.addEventListener('click', onCloseBtnClick);
backdrop.addEventListener('click', onCloseBtnClick);
icon.addEventListener('click', onCloseBtnClick);

export function onOpenModalBtnClick() {
  backdrop.classList.remove('is-hidden');
  document.body.classList.add('modal-open'); // Добавление класса для запрета прокрутки
  window.addEventListener('keydown', onEscBtnPush);

  // Запрет прокрутки body
  document.body.style.overflow = 'hidden';

  // When the modal is shown, we want a fixed body

  // Сохраняем текущую позицию прокрутки, только если модальное окно не открыто
  if (!document.body.classList.contains('modal-open')) {
    scrollPosition = window.pageYOffset;
  }
}

function onCloseBtnClick(event) {
  const isClickOnBackdrop = event.target !== backdrop;
  const isClickOnCloseModalBtn = event.target !== closeModalBtn;
  const isEscape = event.code !== 'Escape';
  const isIcon = event.target !== icon;
  const isIconParentNode = event.target.parentNode !== icon;

  // Восстановление прокрутки body
  document.body.style.overflow = 'auto';

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

  if (!document.body.classList.contains('modal-open')) {
    window.scrollTo({
      top: scrollPosition,
      behavior: 'instant',
    });
  }
}

function onEscBtnPush(event) {
  if (event.code === 'Escape') {
    onCloseBtnClick(event);
  }
}
