import React, { Component } from 'react';
import CheckoutList from './CheckoutList'
import { connect } from 'react-redux';
import CouponForm from './CouponForm';
import { Link } from 'react-router';

class Checkout extends Component {

  calculateTotal() {
    const developersInCart = this.props.cart.developers;
    const developersLoginInCart = Object.keys(developersInCart);
    const developersInfo = this.props.developers;

    let developersInCartInfo = developersInfo.filter((devInfo) => {
      return developersLoginInCart.includes(devInfo.id)
    })

    const subtotal = developersInCartInfo.reduce((total, devInfo) =>{
      const hours = Number(developersInCart[devInfo.id].hours);
      const wage = devInfo.wage;
      return total + (wage * hours)
    }, 0);

    const discount = subtotal * Number(this.props.cart.discount);
    const total = subtotal - discount;
    return [subtotal, discount, total];
  }

  render(){
    if ( this.props.cart.loading ) {
      return <p>Loading...</p>
    }

    const [subtotal, discount, total] = this.calculateTotal();

    return (
      <div className="w-100">
        <h1 className="f5 f4-ns fw6 tc black-70 measure center">Checkout</h1>
        <h2 className="f6 black-70 fw2 tc ttu tracked center">Please confirm your purchase before proceeding </h2>
        <CheckoutList developersInCart={this.props.cart.developers}/>

        {/* total */}
        <p className="f6 black-70 fw2 tc ttu tracked center">Subtotal: {subtotal}</p>
        <p className="f6 black-70 fw2 tc ttu tracked center">Discount: {discount}</p>
        <hr className="w4" />
        <p className="f6 black-70 fw2 tc ttu tracked center">Total: {total}</p>
        <CouponForm />
        {/* next page */}
        <div className="measure center">
          <Link to="/confirmation" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box fr">
            <span className="pr1">Complete Checkout</span>
          </Link>
        </div>

      </div>
    );
  }
}

function mapStateToProps( { cart, developers } ) {
  return { cart, developers };
}

export default connect(mapStateToProps)(Checkout);
