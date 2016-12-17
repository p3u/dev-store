import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDevelopers, setCurrentOrg } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
  super(props);
  this.state = {
    term: ''
  };
}

  // Controlling my form :)
  onInputChange(e){
    this.setState({term: e.target.value});
  }

  // Fetching devs
  onFormSubmit(e){
    e.preventDefault();
    const term = this.state.term;
    const searchHistory = this.props.organization.searchHistory;

    if( searchHistory.includes(term) ) {
      this.props.setCurrentOrg(term);
    }
    else {
      this.props.fetchDevelopers(term);
    }

    this.setState({ term: '' });
  }

  render(){
    return (
      <div className="pa3-l">
        <form onSubmit={(e) => this.onFormSubmit(e)} className="mw7 center pa4 br2-ns ba b--black-20">
          <fieldset className="cf bn ma0 pa0">
            <legend className="pa0 f5 f4-ns mb3 black-80">Search for Developers in any Organization</legend>
            <div className="cf">
              <input onChange={(e) => this.onInputChange(e)} value={this.state.term} className="f6 f5-l input-reset ba b--black-10 fl black-80 pa3 w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Mozilla Foundation" type="text" name="Org_Search" />
              <input className="f6 f5-l button-reset fl pv3 tc ba b--black-10 bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Search" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  // Guarantees that fetchDevelopers will be dispatched to
  // the Middlewares and eventually reducers
  return bindActionCreators({ fetchDevelopers, setCurrentOrg }, dispatch)
}

function mapStateToProps( { organization } ) {
  // ES6: same as return { developers: developers }
  return { organization };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
// With both these functions (connect + mapDispatchToProps)
// we can call fetchDevelopers from our SearchBar
