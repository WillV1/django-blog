import { GET_POSTS, GET_POST, DELETE_POST, ADD_POST } from '../actions/types';

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
      };
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false
        }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== payload)
      };
    case ADD_POST: 
      return {
        ...state,
        posts: [...state.posts, payload],
        loading: false
      };
    default: 
    return state;
  }
}

