import 'semantic-ui-css/semantic.min.css';
import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import {LOGIN_AUTH_SUCCESS, LOGIN_AUTH_REQUEST} from './constants/auth';
import {successUser, failerUser} from './actions/user';
import {getUser} from './services/userService';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

if (localStorage.getItem('token')) {
  store.dispatch({type: LOGIN_AUTH_REQUEST})
  //get user from server

  getUser().then((user) => {
    store.dispatch({type: LOGIN_AUTH_SUCCESS});
    store.dispatch(successUser(user));
  }).catch(err => {
    store.dispatch(failerUser());
    console.log(err);
  })

}

ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'),);
registerServiceWorker();
