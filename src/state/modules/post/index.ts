import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { RootState } from 'state/store';
import { AxiosError } from 'axios';

import { axios_app } from 'utils/axios';


interface PostState {
  query: {};
}

const initialState: PostState = {
  query: {

  }
}

export const slice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    
  }
});

// export const requestPostsData = () => (dispatch: Dispatch) => {
//   axios_app().get<ResponseData.Posts>('/dumyData/posts.json')
//     .then(result => {
//       dispatch(setPostsData(result.data.posts))
//     })
//     .catch((error: AxiosError<ResponseData.Error>) => {

//     });
// };

// export const requestPostData = (id: string) => (dispatch: Dispatch) => {
//   axios_app().get<ResponseData.Post>('/dumyData/post.json')
//     .then(result => {
//       dispatch(setPostData(result.data.post));
//     })
//     .catch((error: AxiosError<ResponseData.Error>) => {

//     });
// }

export const {

} = slice.actions;

// export const postsSelector = (state: RootState) => state.post.posts;
// export const postSelector = (state: RootState) => state.post.post;

export default slice.reducer;