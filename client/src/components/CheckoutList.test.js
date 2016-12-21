import React from 'react';
import ReactDOM from 'react-dom';
import CheckoutList from './CheckoutList';

const mockCartItems = [{key:'john', wage: 200, hours: 30},
                       {key:'frusciante', wage: 200, hours: 30},
                       {key:'is', wage: 200, hours: 30},
                       {key:'fucking', wage: 200, hours: 30},
                       {key:'awesome', wage: 200, hours: 30}]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheckoutList cartItems={mockCartItems} />, div);
});
