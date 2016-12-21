import React, { Component } from 'react';
import CheckoutItem from './CheckoutItem';


class CheckoutList extends Component {
  render(){
    return (
      <ul className="list pl0 mt0 measure center">
        {this.props.cartItems.map(item => <CheckoutItem key={item.key} itemInfo={item}/>)}
      </ul>
    );
  }
}

export default CheckoutList
