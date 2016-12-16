import { combineReducers } from 'redux';
import DeveloperReducer from './reducer_developer';

const rootReducer = combineReducers({
  developers: DeveloperReducer
});

export default rootReducer;
