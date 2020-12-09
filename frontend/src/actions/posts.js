import axios from 'axios';
import { DELETE_POST, GET_POSTS } from './types';

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