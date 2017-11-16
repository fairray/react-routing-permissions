import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import template from './template';

export default combineReducers({
  auth,
  user,
  template
});
