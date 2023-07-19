import { FetchBook } from './api';
const fetchBook = new FetchBook();

const contSection = document.querySelector('.cont-section');
contSection.addEventListener('click', onClickWrapper);

function onClickWrapper(event) {
  console.dir(event.target);
  console.dir(event.currentTarget);
}

// fetchBook.fetchElement(/bookId);
