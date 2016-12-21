import { FETCH_DEVELOPERS, SET_CURRENT_ORGANIZATION } from '../actions/index';

export default function(state = {searchHistory: [], current: null}, action) {
    switch (action.type) {
    case FETCH_DEVELOPERS:
      const companyLogin = action.payload.data.data.organization.login;
      return {current: companyLogin, searchHistory: [companyLogin].concat(state.searchHistory)};

    case SET_CURRENT_ORGANIZATION:
      return {current: action.payload, searchHistory: state.searchHistory};
    default:
      return state;
    }
}
