import React, { Component } from 'react';
import CheckoutList from './CheckoutList'
import { connect } from 'react-redux';


class Checkout extends Component {
  render(){
    if ( this.props.cart.loading ) {
      return <p>Loading...</p>
    }

    return (
      <div className="w-100">
        <CheckoutList developersInCart={this.props.cart.developers}/>
      </div>
    );
  }
}

function mapStateToProps( { cart, developers } ) {
  return { cart };
}

export default connect(mapStateToProps)(Checkout);
