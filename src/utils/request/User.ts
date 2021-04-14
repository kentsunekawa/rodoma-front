import { axios_app, axios_auth } from 'utils/axios';

import { SearchQuery, UserData, PostData_min } from 'types';
import {
  Response,
  Users,
  User as User_res,
  Relation,
  icon_url,
  Posts,
} from 'types/ResponseData';


class User {
  static getUsers(searchQuery: SearchQuery, offset: number = 0, limit: number | null = null) {
    let q = `?keyword=${searchQuery.keyword.keyword}&category=${searchQuery.category}&specialty=${searchQuery.specialty}&sort=${searchQuery.orderBy}&offset=${offset}`;
    if(limit !== null) {
      q += `&limit=${limit}`;
    }    
    return new Promise<Response<Users>>((resolve, reject) => {
      axios_app().get(`/users${q}`)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static getUser(id: number) {
    return new Promise<Response<User_res>>((resolve, reject) => {
      axios_app().get(`/users/${id}`)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static getRelation(userId: number, rarget: number) {
    return new Promise<Response<Relation>>((resolve, reject) => {
      axios_app().get(`/users/${rarget}/relations/followers/${userId}`)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error);
        }); 
    });
  }

  static putRelation(userId: number, rarget: number) {
    return new Promise<Response<Relation>>((resolve, reject) => {
      axios_app().put(`/users/${rarget}/relations/followers/${userId}`)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error);
        }); 
    });
  }

  static putUser(userData: UserData) {
    return new Promise<Response<User_res>>((resolve, reject) => {
      axios_auth().put(`/users/${userData.id}`, userData)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static putUserIcon(userId: number, imageUrl: string | ArrayBuffer | null) {
    return new Promise<Response<icon_url>>((resolve, reject) => {
      axios_auth().put(`/users/${userId}/icon`, { image: imageUrl})
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  }

  static getFollowers(userId: number, offset: number = 0, limit: number | null = null) {
    let q = `?offset=${offset}`;
    if(limit !== null) {
      q += `&limit=${limit}`;
    }
    return new Promise<Response<Users>>((resolve, reject) => {
      axios_app().get(`/users/${userId}/relations/followers${q}`)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static getFollowings(userId: number, offset: number = 0, limit: number | null = null) {
    let q = `?offset=${offset}`;
    if(limit !== null) {
      q += `&limit=${limit}`;
    }
    return new Promise<Response<Users>>((resolve, reject) => {
      axios_app().get(`/users/${userId}/relations/followings${q}`)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static getPostsBySpecificUser(
    userId: number,
    isReleasedOnly: boolean = false,
    offset: number = 0,
    limit: number | null = null,
  ) {
    let q = `?offset=${offset}`;
    if(isReleasedOnly) {
      q += '&status=1';
    }
    if(limit !== null) {
      q += `&limit=${limit}`;
    }
    return new Promise<Response<Posts>>((resolve, reject) => {
      axios_app().get(`/users/${userId}/posts${q}`)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  static getPostsMarkedBySpecificUser(userId: number, offset: number = 0, limit: number | null = null) {
    let q = `?offset=${offset}`;
    if(limit !== null) {
      q += `&limit=${limit}`;
    }
    return new Promise<Response<Posts>>((resolve, reject) => {
      axios_app().get(`/users/${userId}/marks${q}`)
        .then(result => {
          resolve(result.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export default User;