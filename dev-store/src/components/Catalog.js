import React, { Component } from 'react';
import Card from './Card'

class Catalog extends Component {
  render(){
    return (
      <section className="cf w-100 pa2-ns">
        {this.props.developers.map(dev => <Card key={dev.id} devInfo={dev}/>)}
      </section>
    );
  }
}

export default Catalog
