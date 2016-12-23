import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART } from '../actions/index';

export default function(state = {developers: {}, discount: 0}, action) {
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

    case FETCH_CART:
      debugger
      if( !action.payload.data.success ) {
        return state;
      }
      const discount = action.payload.data.cart.discount;
      let developers = action.payload.data.cart;
      delete developers.discount;
      return {developers: developers, discount: discount};

    default:
      return state;
    }
}
