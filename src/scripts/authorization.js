// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// firebase deploy====>>>>>>>дуже важливо. Для розгортання сайту на гугл)))
// https://best-book-shelf.web.app/====>>>>>>>дуже важливо. Для розгортання сайту на гугл)))
// AIzaSyCWyWexh81Hei5s-IoZqhKe-k-Vd1tuqKU
const firebaseConfig = {
  apiKey: 'AIzaSyCWyWexh81Hei5s-IoZqhKe-k-Vd1tuqKU',
  authDomain: 'best-book-shelf.firebaseapp.com',
  projectId: 'best-book-shelf',
  storageBucket: 'best-book-shelf.appspot.com',
  messagingSenderId: '342785973706',
  appId: '1:342785973706:web:ed93e4de8cbbab9e978333',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const singUpBtn = document.querySelector('.sing-up-link');
const singInBtn = document.querySelector('.sing-in-link');

singUpBtn.addEventListener('click', () => {
  createUserWithEmailAndPassword(auth, 'oleg@tutkaya2.ua', '111111')
    .then(userCredential => {
      // Signed in
      console.log('Signed up===>>>');
      const user = userCredential.user;
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
});
singInBtn.addEventListener('click', () => {
  signInWithEmailAndPassword(auth, 'oleg@tutkaya2.ua', '111111')
    .then(userCredential => {
      // Signed in
      console.log('Signed in===>>>');
      const user = userCredential.user;
      // ...
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});
