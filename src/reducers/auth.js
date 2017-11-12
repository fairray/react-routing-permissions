import {
  LOGIN_AUTH_SUCCESS,
  LOGIN_AUTH_FAILER,
} from '../actions/auth';

const initialState = { isFetching: false, isLoggedIn: false, user: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_AUTH_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGIN_AUTH_FAILER:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};
