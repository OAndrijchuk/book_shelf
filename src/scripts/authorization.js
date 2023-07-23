// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set, onValue } from 'firebase/database';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: 'AIzaSyCWyWexh81Hei5s-IoZqhKe-k-Vd1tuqKU',
//   authDomain: 'best-book-shelf.firebaseapp.com',
//   databaseURL:
//     'https://best-book-shelf-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: 'best-book-shelf',
//   storageBucket: 'best-book-shelf.appspot.com',
//   messagingSenderId: '342785973706',
//   appId: '1:342785973706:web:ed93e4de8cbbab9e978333',
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);
// const auth = getAuth();
// const database = getDatabase();
// // =============================================================================
// let isAuth = JSON.parse(localStorage.getItem('userAuth'));
// const authorizationModal = document.querySelector('.registration-backdrop');
// const registrationForm = document.querySelector('.registration-modal-form');
// const singUpBtn = document.querySelector('.sing-up-link');
// const singInBtn = document.querySelector('.sing-in-link');
// let userRef;
// if (isAuth) {
//   userRef = ref(
//     database,
//     'users/' + JSON.parse(localStorage.getItem('userAuth'))
//   );
// } else {
//   authorizationModal.classList.remove('is-hidden');
// }

// //----------------------------------------------------------------------------------------

// registrationForm.addEventListener('submit', singUpUser);
// function singUpUser(event) {
//   event.preventDefault();
//   const { userPassword, userEmail, userName } = event.target.elements;
//   createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
//     .then(userCredential => {
//       console.log('Signed up===>>>');
//       const user = userCredential.user;
//       localStorage.setItem('userAuth', JSON.stringify(user.uid));
//       userRef = ref(database, 'users/' + user.uid);
//       set(userRef, {
//         userId: user.uid,
//         email: userEmail.value,
//         name: userName,
//         // userBookList: JSON.parse(localStorage.getItem('bookList')),
//       });
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage);
//       console.log(errorCode);
//     });
// }
// // singUpBtn.addEventListener('click', singUpUser);
// singUpBtn.addEventListener('click', getBookList);
// function getBookList(event) {
//   event.preventDefault();
//   if (!JSON.parse(localStorage.getItem('userAuth'))) {
//     return;
//   }
//   userRef = ref(
//     database,
//     'users/' + JSON.parse(localStorage.getItem('userAuth'))
//   );
//   onValue(userRef, snapshot => {
//     const data = snapshot.val();
//     console.log(data.userBookList);
//   });
// }

// singInBtn.addEventListener('click', () => {
//   signInWithEmailAndPassword(auth, 'andrijchuk@gmail.com', '111111')
//     .then(userCredential => {
//       console.log('Signed in===>>>');
//       const user = userCredential.user;
//       userRef = ref(database, 'users/' + user.uid);
//       // set(userRef, {
//       //   userId: user.uid,
//       //   email: 'email',
//       //   profile_picture: 'imageUrl',
//       // });

//       onValue(userRef, snapshot => {
//         const data = snapshot.val();
//         console.log(data);
//       });
//       // ...
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(errorMessage);
//     });
// });

// // function writeUserData(userId, name, email, imageUrl) {
// //   const db = getDatabase();
// //   set(ref(db, 'users/' + userId), {
// //     userId: userId,
// //     email: 'email',
// //     profile_picture: 'imageUrl',
// //   });
// // }
