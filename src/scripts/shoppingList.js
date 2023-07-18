import { createBookMarkup } from './shoping-list-markup';

const shoppingListBtn = document.querySelector('.shopping-link');
const container = document.querySelector('.cont-section');

const onShoppingClick = event => {
  // event.preventDefault();

  // const booksInChart = localStorage.getItem(bookList) || null;
  //
  // createlist();
  const bookObj = {
    _id: '643282b1e85766588626a080',
    list_name: 'Advice How-To and Miscellaneous',
    date: '2023-04-01T00:00:00.000Z',
    age_group: '',
    amazon_product_url:
      'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20',
    article_chapter_link: '',
    author: 'James Clear',
    book_image:
      'https://storage.googleapis.com/du-prd/books/images/9780735211292.jpg',
    book_image_width: 328,
    book_image_height: 495,
    book_review_link: '',
    book_uri: 'nyt://book/0398a355-c032-534e-a0af-647b06f0840d',
    contributor: 'by James Clear',
    contributor_note: '',
    created_date: '2023-04-05 22:05:27',
    description: '',
    first_chapter_link: '',
    price: '0.00',
    primary_isbn10: '0735211299',
    primary_isbn13: '9780735211292',
    publisher: 'Avery',
    rank: 1,
    rank_last_week: 1,
    sunday_review_link: '',
    title: 'ATOMIC HABITS',
    updated_date: '2023-04-05 22:10:16',
    weeks_on_list: 175,
    buy_links: [
      {
        name: 'Amazon',
        url: 'https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299?tag=NYTBSREV-20',
      },
      {
        name: 'Apple Books',
        url: 'https://goto.applebooks.apple/9780735211292?at=10lIEQ',
      },
      {
        name: 'Barnes and Noble',
        url: 'https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780735211292',
      },
      {
        name: 'Books-A-Million',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FATOMIC%252BHABITS%252FJames%252BClear%252F9780735211292&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DATOMIC%252BHABITS%252BJames%252BClear',
      },
      {
        name: 'Bookshop',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780735211292&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DATOMIC%2BHABITS',
      },
      {
        name: 'IndieBound',
        url: 'https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780735211292%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DATOMIC%2BHABITS%2BJames%2BClear%26aff%3DNYT',
      },
    ],
    __v: 0,
  };
  // const img = `<img src="./images/books-empty.png" alt="" />`
  // if (booksInChart) {
  const book = createBookMarkup(bookObj);
  container.innerHTML = book;
  // } else {
  //   container.innerHTML = img;
  // }
};

shoppingListBtn.addEventListener('click', onShoppingClick);
