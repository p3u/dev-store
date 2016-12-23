import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from '../actions/index';
import Cookies from 'cookies-js';
import axios from 'axios';

class AddCartButton extends Component {

  // Fetching devs
  onClick(e){
    e.preventDefault();

    const devLogin = this.props.devId;
    let user = Cookies.get('userid');
    if( user ) {
      this.props.addToCart(devLogin , user );
    }
    else {
      // Maybe this post should be an action.
      // I didn't put it there since it doesn't affect any reducer or app state
      axios.post(`http://${window.location.hostname}:5000/api/new/user`)
      .then(() => {
        user = Cookies.get(user);
        this.props.addToCart(devLogin, user);
      });
    }
  }

  render(){
    return (
      <button onClick={(e) => this.onClick(e)} className="no-underline near-white bg-animate bg-near-black hover-bg-gray pointer inline-flex items-center ma2 tc br2 pa2 fr db cb" href="https://facebook.com" title="Facebook">
          <i className="fa fa-shopping-cart white" aria-hidden="true" />
          <span className="f6 ml3 pr2">Add to Cart</span>
      </button>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddCartButton);
