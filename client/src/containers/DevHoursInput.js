import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateDevHours } from '../actions/index';
import Cookies from 'cookies-js';
import _ from 'lodash';

class DevHoursInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hours: this.props.hours
    };
  }

  // Debouncing hours updates
  updateDevHours = _.debounce(
    this.props.updateDevHours,
    350
  )


  // Controlling my form and optimisticly updating it.
  onInputChange(e) {
    const hours = e.target.value;
    this.setState( { hours } );


    this.updateDevHours(this.props.devId, hours, Cookies.get('userid'));

  }

  render() {
    debugger
    const isSynchedWithServer = this.state.hours === this.props.hours;
    const color = isSynchedWithServer ? 'black' : 'light-blue'
    return (
      <input onChange={ (e) => this.onInputChange(e) } className={"f6 w2-5 " + color} type="number" name="quantity" min="1" max="99" value={this.state.hours}/>
    );
  }
}

function mapStateToProps( { cart } , ownProps) {
  const developers = cart.developers;
  const hours = developers[ownProps.devId].hours;
  return { hours };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateDevHours }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DevHoursInput);
