import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import CatalogBrowser from './components/CatalogBrowser';
import Checkout from './containers/Checkout';
import Profile from './containers/Profile';
import PurchaseConfirmation from './components/PurchaseConfirmation';

export default (
  // Map the root to CatalogBrowser component
  <Route path="/" component={App}>
    <IndexRoute component={CatalogBrowser} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/confirmation" component={PurchaseConfirmation} />
    {/* :id is a param passed to the PostShow component */}
    <Route path="/profile/:id" component={Profile} />
  </Route>
);
