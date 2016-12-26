import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from './Card';
import { fetchDevelopers } from '../actions/index';

class Catalog extends Component {

  handleClick(e){
    e.preventDefault();
    const orgInfo = this.props.organization;
    const organization = orgInfo.current;
    const endCursor = orgInfo.paginationInfo[organization].endCursor
    this.props.fetchDevelopers(organization, endCursor)
  }

  filterByOrg = function(devs, filteredOrg) {
    return devs.filter( (dev) => {
      // Lower case without spaces
      filteredOrg = filteredOrg ? filteredOrg.toLowerCase().replace(/\s/g,'') : undefined
      const orgLogins = dev.organizations.map((org) => {
        return org.login.toLowerCase().replace(/\s/g,'');
      });
      return orgLogins.includes(filteredOrg);
    });
  }

  renderLoadMoreButton = function() {
    const orgInfo  = this.props.organization;

    const organization = orgInfo.current;
    if (!organization) return '';

    const hasNextPage = orgInfo.paginationInfo[organization].hasNextPage
    if (!hasNextPage) return '';

    else {
      return (
        <section className="cf w-100 pa2-ns mw5 mw7-ns center tc pa3 ph5-ns">
          <button onClick={(e) => this.handleClick(e)}className="m0 f6 dim br3 ba bw2 ph3 pv2 mb2 dib dark-blue lh-copy measure" href="#0">Load More</button>
        </section>
      );
    }
  }

  render(){

    const filteredDevelopers = this.filterByOrg( this.props.developers,
                                                 this.props.organization.current );

    return (
      <div className="center">
        <section className="cf w-100 pa2-ns tc">
          {filteredDevelopers.map(dev => <Card key={dev.id} devInfo={dev}/>)}
        </section>
        {this.renderLoadMoreButton()}
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDevelopers }, dispatch)
}

// ES6: instead of getting state and using state.developers and state.organization
// I'm removing  straight away
function mapStateToProps( { developers, organization } ) {
  // ES6: same as return { developers: developers, organization: organization }
  return { developers, organization };
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
