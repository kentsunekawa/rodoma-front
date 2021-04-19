import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { UserData_overview } from 'types';
import { RootState } from 'state/store';
import { requestSignup } from './actions/requestSignup';
import { requestSignin } from './actions/requestSignin';

interface UserState {
  user: UserData_overview | null;
  isInitChecked: boolean;
  isVisited: boolean | null;
  isSignupComplete: boolean;
}

const initialState: UserState = {
  user: null,
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
  },
});

// selectors
export const userSelector = (state: RootState): UserData_overview | null => state.user.user;
export const isInitCheckedSelector = (state: RootState): boolean => state.user.isInitChecked;
export const isVisitedSelector = (state: RootState): boolean | null => state.user.isVisited;
export const isSignupCompleteSelector = (state: RootState): boolean => state.user.isSignupComplete;

// thunk actions
export const signout = () => (dispatch: Dispatch): void => {
  localStorage.setItem('token', '');
  dispatch(setUser(null));
};

// export actions
export const { setUser, setInitCheckStatus, setIsVisited, setIsSignupComplete } = slice.actions;

export { requestSignin, requestSignup };

export default slice.reducer;
