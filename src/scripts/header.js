import { singOuttt } from './registration-modal';

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(el => el.classList.remove('activ-page'));
menuLinks[0].classList.add('activ-page');

const mobileLinks = document.querySelectorAll('.mob-menu-link');
mobileLinks.forEach(el => el.classList.remove('activ-page'));
mobileLinks[0].classList.add('activ-page');

const userEl = document.querySelector('.user-btn');
const logOutBtn = document.querySelector('.sign-out-btn');
const signUpBtn = document.querySelector('.sign-up-btn');

userEl.addEventListener('click', showLogOut);
function showLogOut() {
  logOutBtn.classList.toggle('visually-hidden');
}

logOutBtn.addEventListener('click', singOuttt);

logOutBtn.addEventListener('click', logOutUserSecssion);
function logOutUserSecssion() {
  logOutBtn.classList.toggle('visually-hidden');
  userEl.classList.add('hide-user');
  const signupBtn = [...document.querySelectorAll('.sign-up-btn')];
  signupBtn.forEach(el => el.classList.remove('visually-hidden'));
  // !NEED to add LOGIC TO "LOG OUT" or Redirect to "Log Out page"
}
