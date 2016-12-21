import React, { Component } from 'react';
import CheckoutList from './CheckoutList'

class Checkout extends Component {
  render(){
    return (
      <div className="w-100">
        <CheckoutList cartItems={[{key:'john', wage: 200, hours: 30},{key:'frusciante', wage: 200, hours: 30},{key:'is', wage: 200, hours: 30},{key:'fucking', wage: 200, hours: 30},{key:'awesome', wage: 200, hours: 30}]}/>
      </div>
    );
  }
}

export default Checkout
