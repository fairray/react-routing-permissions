import {
  LOGIN_AUTH_REQUEST,
  LOGIN_AUTH_SUCCESS,
  LOGIN_AUTH_FAILER
} from '../constants/auth';

const initialState = { isFetching: false, isLoggedIn: false,};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_AUTH_REQUEST:
    return {
      ...state,
      isFetching: true
    };
    case LOGIN_AUTH_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isFetching: false,
      };
    case LOGIN_AUTH_FAILER:
      return {
        ...state,
        isLoggedIn: false,
        isFetching: false,
      };
    default:
      return state;
  }
};
