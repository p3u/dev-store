import React from 'react';
import '../style/App.css';
import SearchBar from '../containers/SearchBar';
import Catalog from './Catalog';

export default function App(props){
  return (
    <div className="App">
      {/* TODO: add app header and footer */}
      {props.children}
    </div>
  );
}
