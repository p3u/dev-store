import React from 'react';
import '../style/App.css';
import SearchBar from '../containers/SearchBar';
import Catalog from './Catalog';
import axios from 'axios';
import Cookies from 'cookies-js';

export default function App(props){
  if( !Cookies.get('userid') ){
  const BASE_URL  = `http://${window.location.hostname}:5000/api`
    axios.post(`${BASE_URL}/new/user`);
  }
  return (
    <div className="App">
      {/* TODO: add app header and footer */}
      {props.children}
    </div>
  );
}
