import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode'
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import { setUser } from './store/actions/authActions'
import {setToastMessage} from './store/actions/metaActions'

import store from './store'
import setAuthToken from './utils/setAuthToken'

if (localStorage.getItem('auth_token')) {
    let decode = jwtDecode(localStorage.getItem('auth_token'))

    if ((decode.exp * 1000) > new Date().getTime()) {
        store.dispatch(setUser(decode))
        setAuthToken(localStorage.getItem('auth_token'))
    } else {
        store.dispatch(setToastMessage('Login Expired'))
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
    
    serviceWorker.unregister();
