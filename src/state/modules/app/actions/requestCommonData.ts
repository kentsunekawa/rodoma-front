
import { Dispatch } from '@reduxjs/toolkit';
import { setCategoryTree, setSnsList } from 'state/modules/app';
import { setMessage } from 'state/modules/app';
import { RESPONSE_MESSAGES } from 'utils/messages';

import App from 'utils/request/App';

export const requestCategoryTree = () => async (dipatch: Dispatch) => {
  try {
    const result = await App.getCategoryTree();
    if(result.data) {      
      dipatch(setCategoryTree(result.data.categoryTree));
    }
  } catch (error){
    if(error.response) {
      dipatch(
        setMessage({
          isShow: true,
          type: 'error',
          message: RESPONSE_MESSAGES.error_internal_server_error,
        })
      );
    }
  }
};

export const requestSnsList = () => async (dipatch: Dispatch) => {
  try {
    const result = await App.getSnsList();
    if(result.data) {
      dipatch(setSnsList(result.data.sns));
    }
  } catch(error) {
    if(error.response) {
      dipatch(
        setMessage({
          isShow: true,
          type: 'error',
          message: RESPONSE_MESSAGES.error_internal_server_error,
        })
      );
    }
  }
};