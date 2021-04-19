import { axios_app, axios_auth } from 'utils/axios';

import { SearchQuery, UserData } from 'types';
import { Response, Users, User as User_res, Relation, icon_url, Posts } from 'types/ResponseData';

class User {
  static getUsers(
    searchQuery: SearchQuery,
    offset = 0,
    limit: number | null = null
  ): Promise<Response<Users>> {
    let q = `?keyword=${searchQuery.keyword.keyword}&category=${searchQuery.category}&specialty=${searchQuery.specialty}&sort=${searchQuery.orderBy.user}&offset=${offset}`;
    if (limit !== null) {
      q += `&limit=${limit}`;
    }
    return new Promise<Response<Users>>((resolve, reject) => {
      axios_app()
        .get(`/users${q}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static getUser(id: number): Promise<Response<User_res>> {
    return new Promise<Response<User_res>>((resolve, reject) => {
      axios_app()
        .get(`/users/${id}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static getRelation(userId: number, rarget: number): Promise<Response<Relation>> {
    return new Promise<Response<Relation>>((resolve, reject) => {
      axios_app()
        .get(`/users/${rarget}/relations/followers/${userId}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static putRelation(userId: number, rarget: number): Promise<Response<Relation>> {
    return new Promise<Response<Relation>>((resolve, reject) => {
      axios_app()
        .put(`/users/${rarget}/relations/followers/${userId}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static putUser(userData: UserData): Promise<Response<User_res>> {
    return new Promise<Response<User_res>>((resolve, reject) => {
      axios_auth()
        .put(`/users/${userData.id}`, userData)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static putUserIcon(
    userId: number,
    imageUrl: string | ArrayBuffer | null
  ): Promise<Response<icon_url>> {
    return new Promise<Response<icon_url>>((resolve, reject) => {
      axios_auth()
        .put(`/users/${userId}/icon`, { image: imageUrl })
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static getFollowers(
    userId: number,
    offset = 0,
    limit: number | null = null
  ): Promise<Response<Users>> {
    let q = `?offset=${offset}`;
    if (limit !== null) {
      q += `&limit=${limit}`;
    }
    return new Promise<Response<Users>>((resolve, reject) => {
      axios_app()
        .get(`/users/${userId}/relations/followers${q}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static getFollowings(
    userId: number,
    offset = 0,
    limit: number | null = null
  ): Promise<Response<Users>> {
    let q = `?offset=${offset}`;
    if (limit !== null) {
      q += `&limit=${limit}`;
    }
    return new Promise<Response<Users>>((resolve, reject) => {
      axios_app()
        .get(`/users/${userId}/relations/followings${q}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static getPostsBySpecificUser(
    userId: number,
    isReleasedOnly = false,
    offset = 0,
    limit: number | null = null
  ): Promise<Response<Posts>> {
    let q = `?offset=${offset}`;
    if (isReleasedOnly) {
      q += '&status=1';
    }
    if (limit !== null) {
      q += `&limit=${limit}`;
    }
    return new Promise<Response<Posts>>((resolve, reject) => {
      axios_app()
        .get(`/users/${userId}/posts${q}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static getPostsMarkedBySpecificUser(
    userId: number,
    offset = 0,
    limit: number | null = null
  ): Promise<Response<Posts>> {
    let q = `?offset=${offset}`;
    if (limit !== null) {
      q += `&limit=${limit}`;
    }
    return new Promise<Response<Posts>>((resolve, reject) => {
      axios_app()
        .get(`/users/${userId}/marks${q}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default User;
