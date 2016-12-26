import React, { Component } from 'react';
import CheckoutList from './CheckoutList'
import { connect } from 'react-redux';
import CouponForm from './CouponForm';

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
        <h2 className="f6 black-70 fw2 tc ttu tracked center">You will be able to confirm your order on the next page</h2>
        <CheckoutList developersInCart={this.props.cart.developers}/>

        {/* total */}
        <p className="f6 black-70 fw2 tc ttu tracked center">Subtotal: {subtotal}</p>
        <p className="f6 black-70 fw2 tc ttu tracked center">Discount: {discount}</p>
        <hr className="w4" />
        <p className="f6 black-70 fw2 tc ttu tracked center">Total: {total}</p>
        <CouponForm />
        {/* next page */}
        <div className="measure center">
          <a href="#0" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box fr">
            <span className="pr1">Go to Confirmation Page</span>
            <svg className="w1" data-icon="chevronRight" viewBox="0 0 32 32" style={{fill:'currentcolor'}}>
              <title>chevronRight icon</title>
              <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
            </svg>
          </a>
        </div>

      </div>
    );
  }
}

function mapStateToProps( { cart, developers } ) {
  return { cart, developers };
}

export default connect(mapStateToProps)(Checkout);
