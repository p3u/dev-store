import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import { Router }  from 'react-router';
import { createHashHistory } from 'history';

import reducers from './reducers';
import routes from './routes';

import './style/index.css';
import './style/vtex-style.css';

// I didn't want to use hash history, but I couldn't configure the server properly
let history = createHashHistory({
  basename: 'http:localhost:3000',
  hashType: 'slash',

  getUserConfirmation: (message, callback) => callback(window.confirm(message))
})

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={history} routes={routes} />
  </Provider>
  , document.getElementById('root'));
