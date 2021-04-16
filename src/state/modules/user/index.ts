import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { requestSignin } from './actions/requestSignin';
import { requestSignup } from './actions/requestSignup';
import { 
  UserData_overview,
} from 'types';
import { RootState } from 'state/store';
import { setMode } from 'state/modules/app';

interface UserState {
  user: UserData_overview | null;
  isInitChecked: boolean;
  isVisited: boolean | null;
  isSignupComplete: boolean;
}

const initialState: UserState = {
  user: null,
  // user: {
  //   id: 101,
  //   name: 'Ken Tsunekawa',
  //   icon_url: 'https://rodoma.s3-ap-northeast-1.amazonaws.com/img/user/icon/user_d06f36b1-7174-47d4-8dc4-58f62b50d0ae.jpg',
  // },
  isInitChecked: false,
  isVisited: null,
  isSignupComplete: false,
};

// slice
export const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData_overview | null>) => {
      state.user = action.payload;
    },
    setInitCheckStatus: (state, action: PayloadAction<boolean>) => {
      state.isInitChecked = action.payload;
    },
    setIsVisited: (state, action: PayloadAction<boolean>) => {
      state.isVisited = action.payload;
    },
    setIsSignupComplete: (state, action: PayloadAction<boolean>) => {
      state.isSignupComplete = action.payload;
    },
  }
});

// selectors
export const userSelector = (state: RootState) => state.user.user;
export const isInitCheckedSelector = (state: RootState) => state.user.isInitChecked;
export const isVisitedSelector = (state: RootState) => state.user.isVisited;
export const isSignupCompleteSelector = (state: RootState) => state.user.isSignupComplete;

// thunk actions
export const initCheck = () => (dispatch: Dispatch) => {
  
  const mode = localStorage.getItem('mode');
  if(mode === 'dark') {
    dispatch(setMode(mode));
  }
  
  const isVisited = Boolean(localStorage.getItem('isVisited'));
  if(isVisited) {
    dispatch(setIsVisited(true));
    const token = localStorage.getItem('token');
    dispatch(setInitCheckStatus(true));
    // if(token) {
    //     axios_app().get<ResponseData.UserByToken>('/')
    //     .then(result => {
    //       dispatch(setUser(result.data));
    //       dispatch(setInitCheckStatus(true));
    //     })
    //     .catch((error: AxiosError<ResponseData.Error>) => {
    //       dispatch(setInitCheckStatus(true));
    //     });
    // } else {
    //   dispatch(setInitCheckStatus(true));
    // }
  } else {
    localStorage.setItem('isVisited', '1');
    dispatch(setIsVisited(false));
    dispatch(setInitCheckStatus(true));
  }
};

export const signout = () => (dispatch: Dispatch) => {
  localStorage.setItem('token', '');
  dispatch(setUser(null));
  // displayMessage(
  //   dispatch,
  //   'success_signout',
  //   200,
  // );
}

// export const requestUserDetailData = (id: string) => () => {
//   axios_app().get('/dummyData/userDetail.json')
//     .then(result => {

//     })
//     .catch(error => {

//     });
// }

// export actions
export const {
  setUser,
  setInitCheckStatus,
  setIsVisited,
  setIsSignupComplete,
} = slice.actions;

export {
  requestSignin,
  requestSignup,
};

export default slice.reducer;