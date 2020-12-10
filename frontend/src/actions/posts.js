import axios from 'axios';
import { createMessage } from './messages';
import { DELETE_POST, GET_POSTS, GET_POST, ADD_POST, GET_ERRORS } from './types';

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

//GET POST BY ID
export const getPost = id => async dispatch => {

  try {

    const response = await axios.get(`/api/blog/${id}`)

    dispatch({
      type: GET_POST,
      payload: response.data
    })
  } catch (err) {
    console.log(err)
  }
}

//ADD POST
export const addPost = formData => async dispatch => {

  const { title, text, image } = formData;

  const data = new FormData();
  data.append('title', title);
  data.append('text', text);
  data.append('image', image);

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
    const errors = {
      msg: err.response.data,
      status: err.response.data
    }
    dispatch({
      type: GET_ERRORS,
      payload: errors
    })
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