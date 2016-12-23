import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART } from '../actions/index';

export default function(state = {developers: {}, discount: 0, loading: true}, action) {
    switch (action.type) {
    case ADD_TO_CART :
      if( !action.payload.data.success ) {
        return state;
      }
      const developer = action.payload.data.developer;
      return { developers: Object.assign({}, developer, state.developers),
               discount: state.discount,
               loading: false };

    case REMOVE_FROM_CART:
      if( !action.payload.data.success ) {
        return state;
      }
      const developerId = action.payload.data.devId;
      let newDevelopers = Object.assign({}, state.developers);
      delete newDevelopers[developerId];
      return { developers: newDevelopers,
               discount: state.discount,
               loading: false };

    case FETCH_CART:
      if( !action.payload.data.success ) {
        return state;
      }
      const discount = action.payload.data.cart.discount;
      let developers = action.payload.data.cart;
      delete developers.discount;

      let cleanedDevelopers = {};
      Object.keys(developers).forEach((devId) => {
        cleanedDevelopers[devId] = {id: devId, hours: developers[devId]}
      });

      return { developers: cleanedDevelopers,
               discount: discount,
               loading: false };

    default:
      return state;
    }
}
