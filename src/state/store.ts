import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import appReducer from './modules/app';
import userReducer from './modules/user';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createStore = () => {
  return configureStore({
    reducer: combineReducers({
      app: appReducer,
      user: userReducer,
    }),
    middleware: [...getDefaultMiddleware(), logger],
  });
};

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
