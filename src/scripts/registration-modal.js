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
const singUpBtn = [...document.querySelectorAll('.sign-up-btn')];

singUpBtn.forEach(el => el.addEventListener('click', onOpenAuthMenu));

registrationForm.addEventListener('submit', singUp);

let isAuth = JSON.parse(localStorage.getItem('userAuth'));
let bookListRef;
let userRef;
if (isAuth) {
  userRef = ref(
    database,
    'users/' + JSON.parse(localStorage.getItem('userAuth'))
  );
  bookListRef = ref(
    database,
    'usersBookList/' + JSON.parse(localStorage.getItem('userAuth'))
  );
  singUpBtn.forEach(el => el.removeEventListener('click', onOpenAuthMenu));
} else {
  singUpBtn.forEach(el => el.addEventListener('click', onOpenAuthMenu));
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
      bookListRef = ref(database, 'usersBookList/' + user.uid);
      const userData = JSON.stringify({
        userName: userName.value,
        userEmail: userEmail.value,
        userPhoto: './somPhoto/',
      });
      set(userRef, userData);
      set(bookListRef, JSON.parse(localStorage.getItem('bookList')));
      setUserInfo();
      document.querySelector('.user-info').classList.remove('is-hidden');
      registrationForm.reset();
      document.location.reload();
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
      bookListRef = ref(database, 'usersBookList/' + user.uid);
      localStorage.setItem('userAuth', JSON.stringify(user.uid));
      onValue(bookListRef, snapshot => {
        const data = snapshot.val();
        console.log(data);
        localStorage.setItem('bookList', data);
        document.location.reload();
      });
      onCloseAuthMenu();
      setUserInfo();
      document.querySelector('.user-info').classList.remove('is-hidden');
      registrationForm.reset();
      // document.location.reload();
    })
    // .then(el => document.location.reload())
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

export function singOuttt() {
  signOut(auth)
    .then(() => {
      console.log('Signed out===>>>');
      localStorage.removeItem('userAuth');
      userRef = null;
      document.querySelector('.user-info').classList.add('is-hidden');
      document.location.reload();
    })
    .catch(error => {
      console.log(error);
    });
}
export function setUserInfo() {
  onValue(
    ref(database, 'users/' + JSON.parse(localStorage.getItem('userAuth'))),
    snapshot => {
      const data = snapshot.val();
      user = JSON.parse(data);
      // console.log(user);
      document.querySelector('.mobil-user-name').textContent = user.userName;
    }
  );
}
function getFierbaseBookList() {
  return onValue(
    ref(
      database,
      'usersBookList/' + JSON.parse(localStorage.getItem('userAuth'))
    ),
    snapshot => {
      const data = snapshot.val();
      localStorage.setItem('bookList', JSON.stringify(data));
      console.log(data);
    }
  );
}

export function addToFierbase() {
  const cartDataFromLocalStorage = localStorage.getItem('bookList');
  set(bookListRef, cartDataFromLocalStorage);
}
