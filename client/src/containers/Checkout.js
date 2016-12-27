import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import CheckoutList from './CheckoutList'
import CouponForm from './CouponForm';
import Cookies from 'cookies-js';
import axios from 'axios';
import { clearCartOnClient } from '../actions/index';

class Checkout extends Component {
  cleanCookies() {
    Cookies.expire('userid')
    const BASE_URL = `http://${window.location.hostname}:5000/api`;
    axios.post(`${BASE_URL}/new/user`);
    this.props.clearCartOnClient();

  }
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
      <div className="w-100 bg-white pa3">
        <h1 className="f4 f2-ns fw6 tc black-70 measure center">
          Checkout
        </h1>
        <h2 className="f4 black-70 fw2 tc ttu tracked center">
          Please confirm your purchase before proceeding
        </h2>
        <CheckoutList developersInCart={this.props.cart.developers}/>

        <div className="display-total pl0 mt0 measure center tc bg-white w-100 h4">
          <CouponForm/>
          {/* total */}
          <div className="fl w-100 w-50-l">
            <p className="f6 black-70 fw2 tc ttu tracked center">
              Subtotal: {subtotal}
            </p>
            <p className="f6 black-70 fw2 tc ttu tracked center">
              Discount: {discount}
            </p>
            <hr className="w4" />
            <p className="f6 black-70 fw2 tc ttu tracked center">
              Total: {total}
            </p>
          </div>
        </div>

        {/* next page */}
        <div className="measure center db tc w-100">
          <Link to="/confirmation" onClick={() => this.cleanCookies()}
                className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center mv3 pa3 ba border-box db center">
            <span className="pr1">Complete Checkout</span>
          </Link>
        </div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearCartOnClient }, dispatch)
}

function mapStateToProps( { cart, developers } ) {
  return { cart, developers };
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
