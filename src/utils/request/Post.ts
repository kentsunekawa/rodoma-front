import { axios_app } from 'utils/axios';

import { SearchQuery, PostData } from 'types';
import { Response, Posts, Post as Post_res, Like, Mark } from 'types/ResponseData';

class Post {
  static getPosts(
    searchQuery: SearchQuery,
    offset = 0,
    limit: number | null = null
  ): Promise<Response<Posts>> {
    let q = `?keyword=${searchQuery.keyword.keyword}&category=${searchQuery.category}&specialty=${searchQuery.specialty}&sort=${searchQuery.orderBy.post}&offset=${offset}&status=1`;
    if (limit !== null) {
      q += `&limit=${limit}`;
    }
    return new Promise<Response<Posts>>((resolve, reject) => {
      axios_app()
        .get(`/posts${q}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static getPost(postId: number): Promise<Response<Post_res>> {
    return new Promise<Response<Post_res>>((resolve, reject) => {
      axios_app()
        .get(`/posts/${postId}}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static delete(postId: number): Promise<Response> {
    return new Promise<Response>((resolve, reject) => {
      axios_app()
        .delete(`/posts/${postId}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static putLike(postId: number, userId: number): Promise<Response<Like>> {
    return new Promise<Response<Like>>((resolve, reject) => {
      axios_app()
        .put(`/posts/${postId}/likes/${userId}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static putMark(postId: number, userId: number): Promise<Response<Mark>> {
    return new Promise<Response<Mark>>((resolve, reject) => {
      axios_app()
        .put(`/posts/${postId}/marks/${userId}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static getLike(postId: number, userId: number): Promise<Response<Like>> {
    return new Promise<Response<Like>>((resolve, reject) => {
      axios_app()
        .get(`/posts/${postId}/likes/${userId}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static getMark(postId: number, userId: number): Promise<Response<Mark>> {
    return new Promise<Response<Mark>>((resolve, reject) => {
      axios_app()
        .get(`/posts/${postId}/marks/${userId}`)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static createPost(post: PostData): Promise<Response<Post_res>> {
    const newPost = {
      post: {
        user_id: post.user_id,
        category_id: post.category_id,
        specialty_id: post.specialty_id,
        release_status: post.release_status,
        title: post.title,
        description: post.description,
        eye_catch_url: post.eye_catch_url,
      },
      subjects: post.subjects.map((subject) => {
        return {
          label: subject.label,
          linked_post_id: subject.linked_post_id,
          renge_start: subject.renge_start,
          renge_end: subject.renge_end,
          title: subject.title,
          description: subject.description,
        };
      }),
      allowedUsers: post.allowedUsers.map((allowedUser) => ({
        user_id: allowedUser.id,
      })),
    };

    return new Promise<Response<Post_res>>((resolve, reject) => {
      axios_app()
        .post('/posts/', newPost)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static putPost(post: PostData): Promise<Response<Post_res>> {
    const newPost = {
      post: {
        id: post.id,
        user_id: post.user_id,
        category_id: post.category_id,
        specialty_id: post.specialty_id,
        release_status: post.release_status,
        title: post.title,
        description: post.description,
        eye_catch_url: post.eye_catch_url,
      },
      subjects: post.subjects.map((subject) => {
        return {
          label: subject.label,
          linked_post_id: subject.linked_post_id,
          renge_start: subject.renge_start,
          renge_end: subject.renge_end,
          title: subject.title,
          description: subject.description,
        };
      }),
      allowedUsers: post.allowedUsers.map((allowedUser) => ({
        user_id: allowedUser.id,
      })),
    };
    return new Promise<Response<Post_res>>((resolve, reject) => {
      axios_app()
        .put(`/posts/${post.id}`, newPost)
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  static postEyeCatch(imageUrl: string | ArrayBuffer | null): Promise<Response<{ url: string }>> {
    return new Promise<Response<{ url: string }>>((resolve, reject) => {
      axios_app()
        .post('/images', {
          path: `post/eye_catch/post_`,
          image: imageUrl,
        })
        .then((result) => {
          resolve(result.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
}

export default Post;
