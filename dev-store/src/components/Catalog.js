import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card'

class Catalog extends Component {
  render(){
    return (
      <section class="cf w-100 pa2-ns">
        {this.props.developers.map(dev => <Card devInfo={dev}/>)}
      </section>
    );
  }
}

export default Catalog
