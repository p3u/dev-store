import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart, removeFromCart } from '../actions/index';
import Cookies from 'cookies-js';

class AddCartButton extends Component {

  // Fetching devs
  addCart(e){
    e.preventDefault()
    const devLogin = this.props.devId;
    let user = Cookies.get('userid');
    if( user ) {
      this.props.addToCart(devLogin , user );
    }
    else {
      alert("This website uses cookies, please allow them in the browser and refresh the page")
    }
  }

  removeCart(e){
    e.preventDefault()
    const devLogin = this.props.devId;
    let user = Cookies.get('userid');
    if( user ) {
      this.props.removeFromCart(devLogin , user );
    }
    else {
      alert("This website uses cookies, please allow them in the browser and refresh the page")
    }
  }

  render(){
    let btnFunction = this.addCart;
    let btnText = 'Add to cart';
    let color = 'green';
    if(this.props.devId in this.props.cart.developers){
      btnFunction = this.removeCart;
      btnText = 'Remove';
      color = 'red';
    }

    let cartIcon = this.props.removeIcon ? '' : <i className="fa fa-shopping-cart white" aria-hidden="true" />

    return (
      <button onClick={(e) => btnFunction.bind(this)(e)} className={`no-underline near-white bg-animate bg-light-${color} hover-bg-${color} pointer inline-flex items-center ma2 tc br2 pa2 fr db cb`} href="https://facebook.com" title="Facebook">
          {cartIcon}
          <span className="f6 ml3 pr2">{btnText}</span>
      </button>
    );
  }
}

function mapStateToProps( { cart } ) {
  // ES6: same as return { developers: developers }
  return { cart };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart, removeFromCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCartButton);
