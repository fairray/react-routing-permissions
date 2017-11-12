export const LOGIN_AUTH_SUCCESS = 'LOGIN_AUTH_SUCCESS';
export const LOGIN_AUTH_FAILER = 'LOGIN_AUTH_FAILER';
export const login = () => (dispatch) => {
  setTimeout(() => {
    dispatch({
      type: LOGIN_AUTH_SUCCESS,
      payload: {
        name: 'test',
        role: 'admin',
      },
    });
  }, 1000);
};
