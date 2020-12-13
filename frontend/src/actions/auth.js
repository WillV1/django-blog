import axios from 'axios';
import { returnErrors } from './messages';
import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS,
LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL} from './types';

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
    const response = await axios.get('/api/auth/user', tokenConfig(getState));
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

//Login user
export const login = (username, password) => async dispatch => {

  //Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  //Request Body
  const body = JSON.stringify({username, password});

  try {
    const response = await axios.post('/api/auth/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
    dispatch({
      type: LOGIN_FAIL
    })
  }
}

//Register User
export const register = ({username, password, email}) => async dispatch => {

  //Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  //Request Body
  const body = JSON.stringify({username, password, email});

  try {
    const response = await axios.post('/api/auth/register', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
    dispatch({
      type: REGISTER_FAIL
    })
  }
}

//Logout user
export const logout = () => async (dispatch, getState) => {

  try {
    
    await axios.post('/api/auth/logout', null, tokenConfig(getState));

    dispatch({
      type: LOGOUT_SUCCESS,
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status))
  }
}

//Set up config with token 
export const tokenConfig = getState => {
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

  return config
}