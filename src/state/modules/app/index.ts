import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';
import { RootState } from 'state/store';
import { Mode, SearchQuery, CategoryTree, Message, Sns, ValidateErrorStatus } from 'types';

import { requestSnsList, requestCategoryTree } from './actions/requestCommonData';

interface AppState {
  mode: Mode;
  isDoorShown: boolean;
  isLoading: boolean;
  isMenuOpen: boolean;
  isSearchPanelOpen: boolean;
  isCover: boolean;
  validateErrorStatus: ValidateErrorStatus;
  message: Message;
  modal: string;
  card: string;
  searchQuery: SearchQuery;
  categoryTree: CategoryTree;
  snsList: Sns[];
}

const initialState: AppState = {
  mode: 'light',
  isDoorShown: true,
  isLoading: false,
  isCover: false,
  validateErrorStatus: {
    suiteName: '',
    validateState: {
      isInvalid: false,
      errors: null,
    },
  },
  modal: '',
  message: {
    isShow: false,
    type: 'success',
    message: '',
  },
  isMenuOpen: false,
  isSearchPanelOpen: false,
  card: '',
  searchQuery: {
    keyword: {
      keyword: '',
      key: 'post',
    },
    category: 0,
    specialty: 0,
    orderBy: {
      post: 'likes_count',
      user: 'created_at',
    },
  },
  categoryTree: [],
  snsList: [],
};

export const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsDoorShow: (state, action: PayloadAction<boolean>) => {
      state.isDoorShown = action.payload;
    },
    toggleMenu: (state, action: PayloadAction<boolean>) => {
      state.isMenuOpen = action.payload;
    },
    toggleSearchPanel: (state, action: PayloadAction<boolean>) => {
      state.isSearchPanelOpen = action.payload;
    },
    toggleIsCover: (state, action: PayloadAction<boolean>) => {
      state.isCover = action.payload;
    },
    setValidateErrorStatus: (state, action: PayloadAction<ValidateErrorStatus>) => {
      state.validateErrorStatus = action.payload;
    },
    cleanupValidateErrorStatus: (state) => {
      state.validateErrorStatus = {
        suiteName: '',
        validateState: {
          isInvalid: false,
          errors: null,
        },
      };
    },
    setMode: (state, action: PayloadAction<Mode>) => {
      state.mode = action.payload;
    },
    setQuery: (state, action: PayloadAction<SearchQuery>) => {
      state.searchQuery = action.payload;
    },
    setModal: (state, action: PayloadAction<string>) => {
      state.modal = action.payload;
    },
    setMessage: (state, action: PayloadAction<Message>) => {
      state.message = action.payload;
    },
    setCard: (state, action: PayloadAction<string>) => {
      state.card = action.payload;
    },
    setCategoryTree: (state, action: PayloadAction<CategoryTree>) => {
      state.categoryTree = action.payload;
    },
    setSnsList: (state, action: PayloadAction<Sns[]>) => {
      state.snsList = action.payload;
    },
  },
});

// selectors
export const isDoorShownSelector = (state: RootState): boolean => state.app.isDoorShown;
export const isLoadingSelector = (state: RootState): boolean => state.app.isLoading;
export const isMenuOpenSelector = (state: RootState): boolean => state.app.isMenuOpen;
export const isSearchPanelOpenSelector = (state: RootState): boolean => state.app.isSearchPanelOpen;
export const isCoverSelector = (state: RootState): boolean => state.app.isCover;
export const cardSelector = (state: RootState): string => state.app.card;
export const modeSelector = (state: RootState): Mode => state.app.mode;
export const categoryTreeSelector = (state: RootState): CategoryTree => state.app.categoryTree;
export const modalSelector = (state: RootState): string => state.app.modal;
export const messageSelector = (state: RootState): Message => state.app.message;
export const validateErrorStatusSelector = (state: RootState): ValidateErrorStatus =>
  state.app.validateErrorStatus;
export const searchQuerySelector = (state: RootState): SearchQuery => state.app.searchQuery;
export const snsListSelector = (state: RootState): Sns[] => state.app.snsList;

export const modeChange = (mode: Mode) => (dispatch: Dispatch): void => {
  localStorage.setItem('mode', mode);
  dispatch(setMode(mode));
};

// export actions
export const {
  toggleMenu,
  setQuery,
  toggleSearchPanel,
  toggleIsCover,
  setModal,
  setMessage,
  setCard,
  setMode,
  setIsLoading,
  setIsDoorShow,
  setValidateErrorStatus,
  cleanupValidateErrorStatus,
  setCategoryTree,
  setSnsList,
} = slice.actions;

export { requestSnsList, requestCategoryTree };

export default slice.reducer;
