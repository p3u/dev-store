import { ADD_TO_CART, REMOVE_FROM_CART, FETCH_CART, UPDATE_DEV_HOURS } from '../actions/index';

export default function(state = {developers: {}, discount: 0, loading: true}, action) {
    if(action.payload && action.payload.response) {
      if( action.payload.response.status === 500 ||  action.payload.response.status === 403) {
        console.log(action.payload.response)
        return state;
      }

      if( !action.payload.data.success ) {
        console.log(action.payload.data.error)
        return state;
      }
    }

    switch (action.type) {
    case ADD_TO_CART :
      const developer = action.payload.data.developer;
      const deveId = Object.keys(developer)[0];
      let cleanDeveloper = {}
      cleanDeveloper[deveId] = {id: developerId, hours: developer[deveId]}

      return { developers: Object.assign({}, cleanDeveloper, state.developers),
               discount: state.discount,
               loading: false };

    case REMOVE_FROM_CART:
      const developerId = action.payload.data.devId;
      let newDevelopers = Object.assign({}, state.developers);
      delete newDevelopers[developerId];
      return { developers: newDevelopers,
               discount: state.discount,
               loading: false };

    case FETCH_CART:
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

    case UPDATE_DEV_HOURS:
      const { devId, hours } = action.payload.data;
      let updatedDevelopers = Object.assign( {}, state.developers );
      updatedDevelopers[devId].hours = hours;
      return { developers: updatedDevelopers,
              discount: state.Discount,
              loading: false };

    default:
      return state;
    }
}
