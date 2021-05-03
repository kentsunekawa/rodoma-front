import { axios_app } from 'utils/axios';

import { Response, SnsList, CategoryTree } from 'types/ResponseData';

class App {
  static getCategoryTree(): Promise<Response<CategoryTree>> {
    return new Promise<Response<CategoryTree>>((resolve, reject) => {
      axios_app()
        .get('/category_tree')
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static getSnsList(): Promise<Response<SnsList>> {
    return new Promise<Response<SnsList>>((resolve, reject) => {
      axios_app()
        .get('/sns')
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default App;
