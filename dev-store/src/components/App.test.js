import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(  <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>, div);
});
