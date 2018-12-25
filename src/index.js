// This must be the first line in src/index.js
import 'react-app-polyfill/ie9';

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createBrowserHistory } from 'history'
import configureStore from './modules/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const history = createBrowserHistory({
    basename: '/stock'
});

ReactDOM.render((
    <Provider store={configureStore(null, history)}>
        <App history={history} />
    </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
