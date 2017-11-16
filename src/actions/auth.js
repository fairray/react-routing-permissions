import {LOGIN_AUTH_REQUEST, LOGIN_AUTH_SUCCESS, LOGIN_AUTH_FAILER} from '../constants/auth';
import { successUser, failerUser } from './user';
import { getUser } from '../services/userService';

export const requestAuth = () => {
  return ({type: LOGIN_AUTH_REQUEST})
}

export const successAuth = () => {
  return ({type: LOGIN_AUTH_SUCCESS})
}

export const failerAuth = () => {
  return ({type: LOGIN_AUTH_FAILER})
}

export const login = () => (dispatch) => {
  dispatch(requestAuth());
  return getUser().then((user) => {
    localStorage.setItem('token', 'secret_token');
    dispatch(successUser(user));
    dispatch(successAuth());
  }).catch(err => {
    dispatch(failerAuth());
    dispatch(failerUser());
    console.log(err);
  });
};