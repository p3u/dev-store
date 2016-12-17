import { combineReducers } from 'redux';
import DeveloperReducer from './reducer_developer';
import OrganizationReducer from './reducer_organization';


const rootReducer = combineReducers({
  developers: DeveloperReducer,
  organization: OrganizationReducer,
});

export default rootReducer;
