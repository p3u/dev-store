import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from '../components/Card';
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
      // Compare lower case without spaces
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

    if (!orgInfo.paginationInfo[organization]) return '';
    const hasNextPage = orgInfo.paginationInfo[organization].hasNextPage
    if (!hasNextPage) return '';

    else {
      return (
        <section className="cf w-100 pa2-ns mw5 mw7-ns center tc pa3 ph5-ns">
          <button onClick={(e) => this.handleClick(e)}
            className="m0 f6 dim br1 ba bw2 ph3 pv2 mb2 dib lh-copy measure tc ba b--black-10 bg-animate blue-bg dim white pointer"
            href="#0"> Load More
        </button>
        </section>
      );
    }
  }

  render(){

    const filteredDevelopers = this.filterByOrg( this.props.developers,
                                                 this.props.organization.current );

    let loading = false;

    // If user already searched for an org, but still no results, show loading...
    if(this.props.organization.current &&  filteredDevelopers.length === 0) {
      loading = true;
    }

    return (
      <div className="center">
        <section className="cf w-100 pa2-ns tc">
          { loading ? 'Loading...' : filteredDevelopers.map(dev => <Card key={dev.id} devInfo={dev} />)}
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
