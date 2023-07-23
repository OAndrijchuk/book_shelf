import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCWyWexh81Hei5s-IoZqhKe-k-Vd1tuqKU',
  authDomain: 'best-book-shelf.firebaseapp.com',
  databaseURL:
    'https://best-book-shelf-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'best-book-shelf',
  storageBucket: 'best-book-shelf.appspot.com',
  messagingSenderId: '342785973706',
  appId: '1:342785973706:web:ed93e4de8cbbab9e978333',
};
// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();
// =============================================================================
const singUpLink = document.querySelector('.sing-up-link');
const singInLink = document.querySelector('.sing-in-link');
const singOutLink = document.querySelector('.sing-out-link');
const registrationForm = document.querySelector('.registration-modal-form');
const authorizationModal = document.querySelector('.registration-backdrop');
const singUpBtnModal = document.querySelector('.signup-btn');
const closeBtn = document.querySelector('.registration-close-btn');
const singUpBtnHeader = document.querySelector('.sign-up-btn');

singUpBtnHeader.addEventListener('click', onOpenAuthMenu);
registrationForm.addEventListener('submit', singUp);

let isAuth = JSON.parse(localStorage.getItem('userAuth'));
let userRef;
if (isAuth) {
  userRef = ref(
    database,
    'users/' + JSON.parse(localStorage.getItem('userAuth'))
  );
} else {
  onOpenAuthMenu();
}

function singUpModalMarkup(event) {
  event.preventDefault();
  registrationForm.elements.userName.style.display = '';
  singUpBtnModal.textContent = 'Sign up';
  registrationForm.removeEventListener('submit', singIn);
  registrationForm.removeEventListener('submit', singUp);
  registrationForm.addEventListener('submit', singUp);
}

function singInModalMarkup(event) {
  event.preventDefault();
  registrationForm.elements.userName.style.display = 'none';
  singUpBtnModal.textContent = 'Sign in';
  registrationForm.removeEventListener('submit', singUp);
  registrationForm.removeEventListener('submit', singIn);
  registrationForm.addEventListener('submit', singIn);
}

function singUp(event) {
  event.preventDefault();
  const { userPassword, userEmail, userName } = event.target.elements;
  createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
    .then(userCredential => {
      console.log('Signed up===>>>');
      const user = userCredential.user;
      localStorage.setItem('userAuth', JSON.stringify(user.uid));
      userRef = ref(database, 'users/' + user.uid);
      set(userRef, {
        userName: userName,
        userEmail: userEmail,
        userPhoto: '',
        bookList: JSON.parse(localStorage.getItem('bookList')),
      });
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      console.log(errorCode);
    });
  onCloseAuthMenu();
}

function singIn(event) {
  event.preventDefault();
  const { userPassword, userEmail } = event.target.elements;
  signInWithEmailAndPassword(auth, userEmail.value, userPassword.value, {
    remember: true,
  })
    .then(userCredential => {
      console.log('Signed in===>>>');
      const user = userCredential.user;
      userRef = ref(database, 'users/' + user.uid);
      localStorage.setItem('userAuth', JSON.stringify(user.uid));
      onValue(userRef, snapshot => {
        const data = snapshot.val();
        localStorage.setItem('bookList', JSON.stringify(data));
        console.log(data);
      });
      onCloseAuthMenu();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

function onCloseAuthMenu() {
  authorizationModal.classList.add('is-hidden');
  singUpLink.removeEventListener('click', singUpModalMarkup);
  singInLink.removeEventListener('click', singInModalMarkup);
  closeBtn.removeEventListener('click', onCloseAuthMenu);
  singOutLink.removeEventListener('click', singOuttt);
}
function onOpenAuthMenu() {
  authorizationModal.classList.remove('is-hidden');
  singUpLink.addEventListener('click', singUpModalMarkup);
  singInLink.addEventListener('click', singInModalMarkup);
  closeBtn.addEventListener('click', onCloseAuthMenu);
  singOutLink.addEventListener('click', singOuttt);
}

// window.addEventListener('storage', function (e) {
//   console.log(isAuth);
//   const cartDataFromLocalStorage = JSON.parse(localStorage.getItem('bookList'));
//   set(userRef, cartDataFromLocalStorage);
//   console.log(cartDataFromLocalStorage);
//   console.log(isAuth);
// });

function singOuttt() {
  signOut(auth)
    .then(() => {
      console.log('Signed out===>>>');
      localStorage.removeItem('userAuth');
      userRef = null;
    })
    .catch(error => {
      console.log(error);
    });
}

export function addToFierbase() {
  const cartDataFromLocalStorage = JSON.parse(localStorage.getItem('bookList'));
  set(userRef, cartDataFromLocalStorage);
}
