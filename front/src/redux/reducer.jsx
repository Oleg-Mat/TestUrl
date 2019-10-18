import {
  REQUEST_URL,
  ERR_MESSAGE,
  REQUESTED_FAILED
} from './types';

const initialState = {
  message: '',
  url: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case  REQUEST_URL: {
      return {
        ...state,
       url: action.url,
       message:'',
      }
    }
   
    case REQUESTED_FAILED: {
      return {
        ...state,
       message: action.message,
      }
    }

    case  ERR_MESSAGE: {
      return {
        ...state,
       message: action.message,
      }
    }

    default:
      return state;
  }
}