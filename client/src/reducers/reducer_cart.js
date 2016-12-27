import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART, UPDATE_DEV_HOURS, APPLY_COUPON, CLEAR_CART_ON_CLIENT } from '../actions/index';

export default function(state = {developers: {}, discount: 0, code: null, loading: true}, action) {
    if(action.payload && action.payload.response) {
      if( action.payload.response.status === 500 ||  action.payload.response.status === 403) {
        return state;
      }

      if( !action.payload.data.success ) {
        return state;
      }
    }

    let devId = undefined;
    let discount = undefined;
    switch (action.type) {
    case ADD_TO_CART :
      const developer = action.payload.data.developer;
      devId = Object.keys(developer)[0];
      let cleanDeveloper = {}
      cleanDeveloper[devId] = {id: devId, hours: developer[devId]}

      return { developers: Object.assign({}, cleanDeveloper, state.developers),
               discount: state.discount,
               code: null,
               loading: false };

    case REMOVE_FROM_CART:
      devId = action.payload.data.devId;
      let newDevelopers = Object.assign({}, state.developers);
      delete newDevelopers[devId];
      return { developers: newDevelopers,
               discount: state.discount,
               code: null,
               loading: false };

    case FETCH_CART:
      discount = action.payload.data.cart.discount;
      let developers = action.payload.data.cart;
      delete developers.discount;

      let cleanedDevelopers = {};
      Object.keys(developers).forEach((devId) => {
        cleanedDevelopers[devId] = {id: devId, hours: developers[devId]}
      });

      return { developers: cleanedDevelopers,
               discount: discount,
               code: null,
               loading: false };

    case UPDATE_DEV_HOURS:
      const hours = action.payload.data.hours;
      devId = action.payload.data.devId;
      let updatedDevelopers = Object.assign( {}, state.developers );
      updatedDevelopers[devId].hours = hours;
      return { developers: updatedDevelopers,
              discount: state.discount,
              code: null,
              loading: false };

    case CLEAR_CART_ON_CLIENT:
      return { developers: {}, discount: 0, code: null, loading: false };

    case APPLY_COUPON:
      const code = action.payload.data.code
      // if code is false, don't change the discount amount, else, apply it.
      discount = code === false ? state.discount : action.payload.data.discount;
      return { developers: state.developers,
              discount: discount,
              code: code,
              loading: false };

    default:
      return state;
    }
}
