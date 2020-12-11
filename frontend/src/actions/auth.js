import axios from 'axios';
import { returnErrors } from './messages';
import { USER_LOADING, USER_LOADED, AUTH_ERROR } from './types';

//Check token & load user
export const loadUser = () => async (dispatch, getState) => {
  //User loading
  dispatch({
    type: USER_LOADING});

  //Get token from state
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  //If token, add to headers config
  if(token){
    config.headers['Authorization'] = `Token ${token}`
  }

  try {
    const response = await axios.get('/api/auth/user', config);
    dispatch({
      type: USER_LOADED,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
    dispatch({
      type: AUTH_ERROR
    })
  }
}