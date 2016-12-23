import React, { Component } from 'react';
import CheckoutItem from '../components/CheckoutItem';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSingleDeveloper } from '../actions/index';

class CheckoutList extends Component {

  componentWillMount() {
    // For each fetched developers (whole app), check if this developer is in
    // the cart.
    // O(n) vs O(kn) if I did the other way around.
    // Could be reduced roughly to O(1) if I used a object to store fetchedDevelopers
    let developersInCart = Object.assign({}, this.props.developersInCart);
    let fetchedDevelopers = this.props.fetchedDevelopers;
    fetchedDevelopers.forEach((dev) => {
      if (dev.id in developersInCart) {
        developersInCart[dev.id].extraInfoFetched = true;
      }
    })

    // For each dev in the cart, check if the extra info was fetched
    // if it wasn't, do it now
    Object.keys(developersInCart).forEach((devId) => {
      if ( developersInCart[devId].extraInfoFetched !== true ) {
        this.props.fetchSingleDeveloper(devId);
      }
    });
  }

  render() {
    debugger
    let renderedDevs = Object.assign({}, this.props.developersInCart);
    this.props.fetchedDevelopers.forEach((dev) => {
      if(dev.id in renderedDevs) {
        Object.assign(renderedDevs[dev.id], dev);
      }
    });

    if (Object.keys(renderedDevs).length === 0) return (<p> 'No devs were added to the list' </p>)

    return (
      <ul className="list pl0 mt0 measure center">
        {Object.keys(renderedDevs).map(id => <CheckoutItem key={id} itemInfo={renderedDevs[id]}/>)}
      </ul>
    );
  }
}

function mapStateToProps( { developers } ) {
  return { fetchedDevelopers: developers };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSingleDeveloper }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutList);
