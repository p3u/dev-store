import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { applyCoupon } from '../actions/index';
import Cookies from 'cookies-js';

class CouponForm extends Component {

  constructor(props){
    super(props);
    this.state = {code: undefined};
  }

  // Controlling my form :)
  onInputChange(e){
    this.setState({code: e.target.value});
  }

  // Applying coupon
  onFormSubmit(e){
    e.preventDefault();
    const userid = Cookies.get('userid');
    const code = this.state.code;
    this.props.applyCoupon(code, userid);
    this.setState({ code: '' });
  }

  renderCuponMessage() {
    const {code, discount} = this.props;
    if (code) {
      return  (
        <small class="f6 black-60 db mb2 red">
                Code {code} successfuly applied. ({discount} off!)
        </small>
      );
    }

    else if (code === false) {
      return (
        <small class="f6 black-60 db mb2 red">
          This code is not valid.
        </small>
      );
    }

    else {
      return ''
    }
  }

  render(){
    return (
      <div className="pa3-l">
        <form onSubmit={(e) => this.onFormSubmit(e)} className="mw7 w5 center pa4 br2-ns ba b--black-20">
          <fieldset className="cf bn ma0 pa0 w5">
            <div className="cf">
              <label htmlFor="coupon-input" className="f6 b db mb2">Coupon Code <span class="normal black-60">(optional)</span></label>
              <input onChange={(e) => this.onInputChange(e)} value={this.state.code} className="f6 f5-l input-reset ba b--black-10 fl black-80 pa3 w-100 w-60-m w-60-l br2-ns br--left-ns" type="text" name="coupon-input" />
              <input className="f6 button-reset fl pv3 tc ba b--black-10 bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Apply" />
            </div>
            <div className="cf">
              {this.renderCuponMessage()}
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ applyCoupon, }, dispatch)
}
function mapStateToProps( { cart } ) {
  const {discount, code} = cart
  return { discount, code };
}

export default connect(mapStateToProps, mapDispatchToProps)(CouponForm)
