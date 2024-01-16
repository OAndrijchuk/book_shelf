const switcher = document.querySelector('.js-switcher');

switcher.checked = JSON.parse(localStorage.getItem('darck-theam'));
changeTheam();
switcher.addEventListener('change', changeTheam);

function changeTheam() {
  localStorage.setItem('darck-theam', switcher.checked);

  if (JSON.parse(localStorage.getItem('darck-theam'))) {
    document.body.classList.add('black-theam-body');
    document.body.classList.add('dark');
    document
      .querySelector('.header-container')
      .classList.add('black-theam-header');
  } else {
    document.body.classList.remove('black-theam-body');
    document.body.classList.remove('dark');
    document
      .querySelector('.header-container')
      .classList.remove('black-theam-header');
  }
}
