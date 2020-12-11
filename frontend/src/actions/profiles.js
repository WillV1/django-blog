import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { ADD_PROFILE } from './types';

//ADD PROFILE
export const addProfile = formData => async dispatch => {

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

    const response = await axios.post('/api/blog/', data, config)
    dispatch(createMessage({postAdded: 'Post Added'}))
    dispatch({
      type: ADD_POST,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
}