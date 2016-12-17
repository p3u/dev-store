import React, { Component } from 'react';
import '../style/App.css';
import SearchBar from '../containers/SearchBar';
import Catalog from './Catalog';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar />
        <Catalog />
      </div>
    );
  }
}

export default App;
