import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card'

class Catalog extends Component {
  render(){
    console.log(this.props.developers)

    return (
      <section className="cf w-100 pa2-ns">
        {this.props.developers.map(dev => <Card key={dev.id} devInfo={dev}/>)}
      </section>
    );
  }
}

// ES6: instead of getting state and using state.developers
// I'm removing developers straight away
function mapStateToProps( { developers } ) {
  // ES6: same as return { developers: developers }
  return { developers };
}

export default connect(mapStateToProps)(Catalog);
