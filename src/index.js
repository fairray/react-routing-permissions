import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import { LOGIN_AUTH_SUCCESS } from './actions/auth';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

if ( localStorage.getItem('token') ){
    //get user from server 
    const user = {
        name: 'test',
        role: 'user', //change to user && reload page && dashboard permission denied for 'user' role
    }
    store.dispatch({
        type: LOGIN_AUTH_SUCCESS,
        payload: user
    });
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
registerServiceWorker();
