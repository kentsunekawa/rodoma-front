import * as ResponseData from "./ResponseData";
import { RELEASE_STATUS } from "utils";

export type Mode = "light" | "dark";

export type Profile = {
  id: number;
  user_id: number;
  category_id: number;
  specialty_id: number;
  catch_copy: string;
  description: string;
  sns: {
    profile_id: number;
    sns_id: number;
    url: string;
  }[];
};

export interface UserData {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  icon_url: string;
  profile: Profile;
}

export interface UserData_overview {
  id: number;
  name: string;
  icon_url: string;
}

export type ReleaseStatus = 0 | 1 | 2;

export interface PostData {
  id: number;
  user_id: number;
  category_id: number;
  specialty_id: number;
  release_status: ReleaseStatus;
  title: string;
  description: string;
  eye_catch_url: string;
  created_at: string | null;
  updated_at: string | null;
  likes_count: number | null;
  marks_count: number | null;
  user: UserData_overview;
  subjects: Subject[];
  allowedUsers: UserData_overview[];
}

export interface PostData_overview {
  id: number;
  title: string;
  release_status: keyof typeof RELEASE_STATUS;
  category_id: number;
  specialty_id: number;
  likes_count: number;
  marks_count: number;
  eye_catch_url: string;
  user: UserData_overview;
}

export interface PostData_min {
  id: number;
  title: string;
}

export interface Subject {
  id: number;
  post_id: number;
  label: SubjectLabel;
  linked_post_id: number | null;
  renge_start: number;
  renge_end: number;
  title: string;
  description: string;
}

export interface Specialty {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  specialties: Specialty[];
}

export type CategoryTree = Category[];

export interface Comment {
  id: number;
  comment: string;
  created_at: string;
  user: UserData_overview;
}

export type PostSearchSortKeys = "created_at" | "likes_count" | "marks_count";
export type UserSearchSortKeys = "created_at" | "likes_count";
export type KeywordSearchQuery = {
  keyword: string;
  key: "user" | "post";
};

export type SearchQuery = {
  keyword: KeywordSearchQuery;
  category: number;
  specialty: number;
  orderBy: PostSearchSortKeys | UserSearchSortKeys | "";
};

export type MessageType = "error" | "success";

export interface Message {
  isShow: boolean;
  type: MessageType;
  message: string;
}

export interface SigninInfo {
  email: string;
  password: string;
}

export interface SignupInfo {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface ResetPassInfo {
  token: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface CommenInfo {
  user_id: number;
  comment: string;
}

export type Chart = "guntt" | "pie";

export type Size = "xxl" | "xl" | "l" | "m" | "s" | "xs" | "xxs";

export type SubjectLabel = null | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type Sns = {
  id: number;
  name: string;
};

export interface ValidateStatus<T> {
  isInvalid: boolean;
  errors: T;
}

export interface ValidateErrorStatus {
  suiteName: string;
  validateState: {
    isInvalid: boolean;
    errors: {
      [key: string]: string[];
    } | null;
  };
}

export type BreadCrumbList = {
  id: number;
  name: string;
}[];

export interface RelationData {
  id: number;
  follower_id: number;
  followed_id: number;
}

export { ResponseData };
