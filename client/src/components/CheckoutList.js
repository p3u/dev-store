import React from 'react';
import CheckoutItem from '../containers/CheckoutItem';


export default function CheckoutList( {cartItems} ) {
    return (
      <ul className="list pl0 mt0 measure center">
        {cartItems.map(item => <CheckoutItem key={item.key} itemInfo={item}/>)}
      </ul>
    );
}
