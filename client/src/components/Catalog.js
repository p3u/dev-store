import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './Card'

class Catalog extends Component {

  filterByOrg = function(devs, filteredOrg){
    debugger
    return devs.filter( (dev) => {
      // Lower case without spaces
      filteredOrg = filteredOrg.toLowerCase().replace(/\s/g,'')
      const orgLogins = dev.organizations.map((org) => {
        return org.login.toLowerCase().replace(/\s/g,'');
      });
      return orgLogins.includes(filteredOrg);
    });
  }

  render(){

    const filteredDevelopers = this.filterByOrg( this.props.developers,
                                                 this.props.organization.current );

    return (
      <section className="cf w-100 pa2-ns">
        {filteredDevelopers.map(dev => <Card key={dev.id} devInfo={dev}/>)}
      </section>
    );
  }
}

// ES6: instead of getting state and using state.developers and state.organization
// I'm removing  straight away
function mapStateToProps( { developers, organization } ) {
  // ES6: same as return { developers: developers, organization: organization }
  return { developers, organization };
}

export default connect(mapStateToProps)(Catalog);
