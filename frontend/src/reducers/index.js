import { combineReducers } from 'redux';
import posts from './posts';
import errors from './errors';
import messages from './messages';
import profiles from './profiles';


export default combineReducers({
  posts,
  errors,
  messages,
  profiles,
})