import { RESPONSE_MESSAGES } from 'utils/messages';

import {
  Sns,
  PostData_overview,
  PostData,
  UserData_overview,
  CategoryTree as CategoryList,
  RelationData,
  UserData,
  Comment,
} from './index';

export type ResponseStatus = keyof typeof RESPONSE_MESSAGES;

export type Response<T = any> = {
  status: ResponseStatus;
  data?: T;
};

export interface Query {
  keyword?: string;
  category_id?: number;
  specialty_id?: number;
  status?: number;
  sort?: string;
  offset?: number;
  limit?: number;
  all?: number;
  start?: number;
  end?: number;
}

export type Token = string;

export interface Signin {
  token: Token;
  user: UserData_overview;
}

export interface Signup {
  user: UserData_overview;
}

export interface CategoryTree {
  categoryTree: CategoryList;
}

export interface SnsList {
  sns: Sns[];
}

export interface Users {
  query: Query;
  users: UserData_overview[];
}

export interface User {
  user: UserData;
}

export interface icon_url {
  icon_url: string;
}

export interface Posts {
  query: Query;
  posts: PostData_overview[];
}

export interface Post {
  post: PostData;
}

export interface Comments {
  query: Query;
  comments: Comment[];
}

export interface Relation {
  relation: RelationData | null;
}

export interface Error {
  error: string;
}

export interface Like {
  like: {
    id: number;
    user_id: number;
    post_id: number;
  } | null;
}

export interface Mark {
  mark: {
    id: number;
    user_id: number;
    post_id: number;
  } | null;
}
