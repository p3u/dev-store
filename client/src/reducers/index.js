import { combineReducers } from 'redux';
import DeveloperReducer from './reducer_developer';
import OrganizationReducer from './reducer_organization';
import CartReducer from './reducer_cart';

const rootReducer = combineReducers({
  developers: DeveloperReducer,
  organization: OrganizationReducer,
  cart: CartReducer
});

export default rootReducer;
