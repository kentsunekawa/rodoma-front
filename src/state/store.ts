import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
// import authReducer from './modules/user';
import appReducer from "./modules/app";
import userReducer from "./modules/user";
import postReducer from "./modules/post";

export const createStore = () => {
  return configureStore({
    reducer: combineReducers({
      app: appReducer,
      // auth: authReducer,
      user: userReducer,
      post: postReducer,
    }),
    middleware: [...getDefaultMiddleware(), logger],
  });
};

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
