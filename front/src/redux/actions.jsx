
import {
  REQUEST_URL,
  ERR_MESSAGE,
  REQUESTED_FAILED
} from './types';
const requestUrl = url => {
  return {
    type: REQUEST_URL,
    url: url,
  };
};
const requestErrorMessage = message => {
  return {
    type: ERR_MESSAGE,
    message: message,
  };
};
const requestErrorAC = err => {
  return {
    type: REQUESTED_FAILED,
    message: err,
  };
};

//thunk
const addUrl = url => async dispatch => {
  try {
    let resp = await fetch('/getnewurl', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(url),
    });
    const data = await resp.json();
    if (data.url) {
      dispatch(requestUrl(data.url));
    } else {
      dispatch(requestErrorMessage(data.message))
    }
  } catch (err) { 
    dispatch(requestErrorAC('Some server problems'))
  }
};

export { addUrl };



