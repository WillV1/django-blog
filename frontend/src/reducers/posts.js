import { GET_POSTS, DELETE_POST } from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true
};

export default function posts( state = initialState, action) {

  const { type, payload } = action

  switch(type){
    case GET_POSTS: 
      return {
        ...state,
        posts: payload,
        loading: false
      }
    default: 
    return state;
  }
}

