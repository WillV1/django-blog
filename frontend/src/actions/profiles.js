import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { GET_PROFILE } from './types';

//GET PROFILE
export const getProfile = id => async dispatch => {

  try {

    const response = await axios.get(`/api/profile/${id}`);

    dispatch({
      type: GET_PROFILE,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
}

//ADD /UPDATE PROFILE
export const addProfile = (formData, history, edit = false) => async dispatch => {

  const { name, location, interest, picture, bio } = formData;

  const data = new FormData();
  data.append('name', name);
  data.append('location', location);
  data.append('interest', interest);
  data.append('picture', picture);
  data.append('bio', bio);

  const config = {
    headers: { 
      'Content-Type': 'multipart/form-data'
    }
  }

  try {

    const response = await axios.post('/api/profile/', data, config)
    dispatch(createMessage({profileUpdated: 'Profile Updated'}))
    dispatch({
      type: GET_PROFILE,
      payload: response.data
    })

    if(!edit) {
      history.push('/profile')
    }

  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
}