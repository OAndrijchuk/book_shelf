const switcher = document.querySelector('.js-switcher');
// const switcher = document.getElementsByClassName('js-switcher');
console.dir(switcher);

switcher.checked = JSON.parse(localStorage.getItem('darck-theam'));
changeTheam();
switcher.addEventListener('change', changeTheam);

function changeTheam() {
  localStorage.setItem('darck-theam', switcher.checked);

  if (JSON.parse(localStorage.getItem('darck-theam'))) {
    document.body.classList.add('black-theam-body');
    document
      .querySelector('.header-container')
      .classList.add('black-theam-header');
  } else {
    document.body.classList.remove('black-theam-body');
    document
      .querySelector('.header-container')
      .classList.remove('black-theam-header');
  }
}
// =============================activ link===============================================
const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(el => el.classList.remove('activ-page'));
menuLinks[0].classList.add('activ-page');
// ==================================================================================
