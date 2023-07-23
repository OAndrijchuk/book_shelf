import { some } from 'lodash';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { setUserInfo } from './registration-modal';

const database = getDatabase();

const mobileMenu = document.querySelector('.mobile-menu-nav');
const burgerBtn = document.querySelector('.burger-menu');
const burgerIco = document.querySelector('.burger-menu-svg');
const closeIco = document.querySelector('.close-menu-icon-cont');

burgerBtn.addEventListener('click', showMobileMenu);

function showMobileMenu(event) {
  document.body.classList.toggle('modal-open');
  burgerIco.classList.toggle('visually-hidden');
  closeIco.classList.toggle('visually-hidden');
  mobileMenu.classList.toggle('is-open-mob-menu');
}

if (JSON.parse(localStorage.getItem('userAuth'))) {
  const user = JSON.parse(localStorage.getItem('userOption'));
  if (user) {
    document.querySelector('.mobil-user-name').textContent = user.userName;
    document.querySelector('.userName').textContent = user.userName;
  }

  console.log(user);
  const signupBtn = [...document.querySelectorAll('.sign-up-btn')];
  const singOutBtn = document.querySelector('.sign-out-mobile');
  signupBtn.forEach(el => el.classList.add('visually-hidden'));
  singOutBtn.classList.remove('visually-hidden');
  document.querySelector('.user-btn').classList.remove('visually-hidden');
} else {
  document.querySelector('.user-info').classList.add('visually-hidden');
  console.log('No autorizetion=====>>>>>');
}
// style="overflow: hidden;"
