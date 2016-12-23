import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/index';

export default function(state = {developers: {}, discount: 0}, action) {
    debugger
    switch (action.type) {
    case ADD_TO_CART :
      if( !action.payload.data.success ) {
        return state;
      }
      const developer = action.payload.data.developer;
      return {developers: Object.assign({}, developer, state.developers),
              discount: state.discount};

    case REMOVE_FROM_CART:
      if( !action.payload.data.success ) {
        return state;
      }
      const developerId = action.payload.data;
      let newDevelopers = Object.assign({}, developer);
      delete newDevelopers[developerId];
      return {developers: newDevelopers, discount: state.discount};

    default:
      return state;
    }
}
