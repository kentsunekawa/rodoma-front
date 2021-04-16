import { axios_app } from 'utils/axios';

import { CommenInfo } from 'types';

import { Response, Comments } from 'types/ResponseData';

class Comment {
  static getComments(postId: number, offset: number): Promise<Response<Comments>> {
    return new Promise<Response<Comments>>((resolve, reject) => {
      const q = `?offset=${offset}`;
      axios_app()
        .get(`/posts/${postId}/comments${q}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static postComment(postId: number, commentInfo: CommenInfo): Promise<Response> {
    return new Promise<Response>((resolve, reject) => {
      axios_app()
        .post(`/posts/${postId}/comments`, commentInfo)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static deleteComment(postId: number, commentId: number): Promise<Response> {
    return new Promise<Response>((resolve, reject) => {
      axios_app()
        .delete(`/posts/${postId}/comments/${commentId}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default Comment;
