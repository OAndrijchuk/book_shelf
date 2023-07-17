import axios from 'axios';

export class FetchBook {
  BASE_OPTION = {
    baseURL: 'https://books-backend.p.goit.global/books',
  };

  constructor() {}
  //   https: //books-backend.p.goit.global/books/category?category=$
  //   const params = {
  //     category: "ldfjgosdfg"
  //   }
  //    FetchBook.fetchElement("/books/category", obj)

  fetchElement(url, params) {
    const optionObject = JSON.parse(JSON.stringify(this.BASE_OPTION));
    if (params) {
      optionObject.params = params;
    }
    return axios.get(`${url}`, optionObject).then(({ data }) => {
      return data;
    });
  }
}
