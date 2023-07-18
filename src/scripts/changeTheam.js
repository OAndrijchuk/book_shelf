const switcher = document.querySelector('.js-switcher');
console.dir(switcher);
// checked: false;
switcher.checked = localStorage.getItem('darck-theam');
switcher.addEventListener('change', changeTheam);
function changeTheam(event) {
  localStorage.setItem('darck-theam', event.target.checked);
  //   console.dir(event.target);
  console.log(localStorage.getItem('darck-theam'));
  if (localStorage.getItem('darck-theam')) {
    document.body.classList.toggle('black-theam-body');
    document
      .querySelector('.header-container')
      .classList.toggle('black-theam-header');
  }
}
