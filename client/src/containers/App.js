import React, { Component } from 'react';
import '../style/App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCart } from '../actions/index';
import NavBar from '../components/NavBar';
import axios from 'axios';
import Cookies from 'cookies-js';

class App extends Component {

  componentWillMount() {
    // If user cookie exists, fetch users cart
    const userid = Cookies.get('userid');
    if( userid ){
      this.props.fetchCart(userid);
    }
    // Else, creates a new user
    else {
      const BASE_URL = `http://${window.location.hostname}:5000/api`;
      axios.post(`${BASE_URL}/new/user`);
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCart }, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
