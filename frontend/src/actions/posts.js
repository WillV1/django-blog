import axios from 'axios';
import { DELETE_POST, GET_POSTS, ADD_POST } from './types';

//GET POSTS
export const getPosts = () => async dispatch => {

  try {

    const response = await axios.get('/api/blog/')

    dispatch({
      type: GET_POSTS,
      payload: response.data
    })
  } catch (err) {
    console.log(err)
  }
}

//ADD POST
export const addPost = formData => async dispatch => {

  const { title, text, name, image, date } = formData;

  const data = new FormData();
  data.append('title', title);
  data.append('text', text);
  data.append('name', name);
  data.append('image', image);
  data.append('date', date);

  const config = {
    headers: { 
      'Content-Type': 'multipart/form-data'
    }
  }

  try {

    const response = await axios.post('/api/blog/', data, config)

    dispatch({
      type: ADD_POST,
      payload: response.data
    })
  } catch (err) {
    console.log(err)
  }
}

//DELETE POST
export const deletePost = id => async dispatch => {

  try {

    await axios.delete(`/api/blog/${id}/`)

    dispatch({
      type: DELETE_POST,
      payload: id
    })
  } catch (err) {
    console.log(err)
  }
}