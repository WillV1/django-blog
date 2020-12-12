import axios from 'axios';
import { createMessage, returnErrors } from './messages';
import { DELETE_POST, GET_POSTS, GET_POST, ADD_POST } from './types';

//GET POSTS
export const getPosts = () => async dispatch => {

  try {

    const response = await axios.get('/api/blog/')

    dispatch({
      type: GET_POSTS,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
}

//GET POST BY ID
export const getPost = id => async dispatch => {

  try {

    const response = await axios.get(`/api/blog/${id}`)

    dispatch({
      type: GET_POST,
      payload: response.data
    })
  } catch (err) {
    dispatch(returnErrors(err.response.data, err.response.status));
  }
}

//ADD POST
export const addPost = formData => async dispatch => {

  const { title, text, image, category } = formData;

  const data = new FormData();
  data.append('title', title);
  data.append('text', text);
  data.append('image', image);
  data.append('category', category);

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

//DELETE POST
export const deletePost = id => async dispatch => {

  try {

    await axios.delete(`/api/blog/${id}/`)
    dispatch(createMessage({postDeleted: 'Post Deleted'}))
    dispatch({
      type: DELETE_POST,
      payload: id
    })
  } catch (err) {
    console.log(err)
  }
}