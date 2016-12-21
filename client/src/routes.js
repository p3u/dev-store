import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import CatalogBrowser from './components/CatalogBrowser';
import Checkout from './components/Checkout';
import Profile from './components/Profile';

export default (
  // Map the root to CatalogBrowser component
  <Route path="/" component={App}>
    <IndexRoute component={CatalogBrowser} />
    <Route path="checkout" component={Checkout} />
    {/* :id is a param passed to the PostShow component */}
    <Route path="profile/:id" component={Profile} />
  </Route>
);
