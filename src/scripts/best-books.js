import { FetchBook } from './api';
import {renderTopBooksList} from './best-books-markup'
const bestBookList = document.querySelector('.best-book-list');
const getLoaderEl = document.querySelector('.loader-inner');
const fetchBook = new FetchBook();

let resizeTimeout; // Переносим таймер на глобальный уровень

function clearTopBooksListMarkup() {
  bestBookList.innerHTML = ''; // Очищаем содержимое элемента
}
console.log(getLoaderEl, '<')
async function getTopBooks(amount) {
  try {
    getLoaderEl.style.display = 'flex'
    clearTopBooksListMarkup(); // Удаляем старую разметку перед новым запросом
    const res = await fetchBook.fetchElement('/top-books');
    createTopBooksListMarkup(res, amount);
  } catch (error) {
    console.log(error);
  } finally {
    getLoaderEl.style.display = 'none'
  }
}


function createTopBooksListMarkup(topBooksList, amount) {
  const markup = renderTopBooksList(topBooksList, amount);
  bestBookList.insertAdjacentHTML('beforeend', markup);
}

function updateScreenWidth() {
  // Очищаем таймер при каждом изменении ширины экрана
  if (resizeTimeout) {
    clearTimeout(resizeTimeout);
  }

  // Устанавливаем новый таймер для вызова функции getTopBooks через 300 мс после последнего изменения ширины экрана
  resizeTimeout = setTimeout(() => {
    const width = window.innerWidth;

    // Удаляем обработчик события resize для избежания лишних запросов во время изменения ширины экрана
    window.removeEventListener('resize', updateScreenWidth);
  
    if (width > 768) {
      getTopBooks(5);
    } else if (width >= 480 && width <= 768) {
      getTopBooks(3);
    } else if (width <= 480) {
      
      getTopBooks(1);
    }

    // Возвращаем обработчик события resize после выполнения запроса
    window.addEventListener('resize', updateScreenWidth);
  }, 300);
}

updateScreenWidth();
window.addEventListener('resize', updateScreenWidth);









