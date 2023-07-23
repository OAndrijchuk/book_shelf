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

// style="overflow: hidden;"
