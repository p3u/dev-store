import { FETCH_DEVELOPERS, SET_CURRENT_ORGANIZATION } from '../actions/index';
const initialState = { searchHistory: [], current: null, paginationInfo: {} };
export default function(state = initialState, action) {
    switch (action.type) {
    case FETCH_DEVELOPERS:
      const orgData = action.payload.data.data.organization;
      if(!orgData) return state;
      const pageInfo = orgData.members.pageInfo;
      const companyLogin = orgData.login;

      // paginationInfo model:
      // paginationInfo = {
      //                    vtex: {endCursor: '=akd9KEe', hasNextPage: true},
      //                    facebook: {endCursor: '=esd5Fd', hasNextPage: true}
      //                  }

      let paginationInfo = {};
      paginationInfo[companyLogin] = { endCursor: pageInfo.endCursor,
                                       hasNextPage: pageInfo.hasNextPage };

      paginationInfo = Object.assign({}, state.paginationInfo, paginationInfo);

      return { paginationInfo: paginationInfo, current: companyLogin,
               searchHistory: [companyLogin].concat(state.searchHistory) };

    case SET_CURRENT_ORGANIZATION:
      return { current: action.payload, searchHistory: state.searchHistory,
               paginationInfo: state.paginationInfo };

    default:
      return state;
    }
}
