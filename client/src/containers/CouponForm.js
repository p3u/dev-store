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
        <small class="f6 black-60 db pt1 mb2">
                Code {code} applied. ({discount*100 + "%"} off!)
        </small>
      );
    }

    else if (code === false) {
      return (
        <small className="f6 black-60 pt1 db mb2">
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
      <div className="fl w-100 w-50-l">
        <form onSubmit={(e) => this.onFormSubmit(e)} className="w5 center br2-ns">
          <fieldset className="cf bn ma0 pa0 w5">
            <div className="cf">
              <label htmlFor="coupon-input" className="f6 db tl ttu pt3 pb1 mb2">Coupon Code <span className="normal black-60">(optional)</span></label>
              <input onChange={(e) => this.onInputChange(e)} value={this.state.code}
                     className="f6 f5-l input-reset ba b--black-10 fl black-80 pa3 w-100 w-60-m w-60-l br2-ns br--left-ns" type="text" name="coupon-input" />
              <input type="submit" value="Apply"
                     className="f6 button-reset fl pv3 tc ba b--black-10 blue-bg bg-animate dim white pointer w-100 w-25-m w-20-l br2-ns br--right-ns"/>
            </div>
            <div className="tl">
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
