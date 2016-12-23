import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSingleDeveloper } from '../actions/index';
import LanguagesPanel from './LanguagesPanel';
import ReposPanel from './ReposPanel';
import OrganizationsPanel from './OrganizationsPanel';
import StatsPanel from './StatsPanel';
import AddCartButton from '../containers/AddCartButton';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { developer: undefined };
  }

  findDev(id) {
    return this.props.developers.find((dev) => dev.id === id);
  }

  componentWillMount() {
    // This perfomance could be improved if I used a hash (object) instead
    // of looping over the array of devs. But I think it's perfectionism
    // since it's unlikely that this array will grow so much that a O(n)
    // operation becomes slow.

    // A little convoluted...
    // Looping over devs, if not found, fetch
    // Once fetch promise is resolved, loop again to grab fetched dev
    let developer  = this.findDev(this.props.params.id);
    this.setState( {developer} );
    if ( developer === undefined ){
      this.props.fetchSingleDeveloper(this.props.params.id)
      .then( () => {
        developer = this.findDev(this.props.params.id);
        this.setState( {developer} );
      });
    }
  }

  render(){
    const dev = this.state.developer
    if (dev === undefined){
      return <p> Loading </p>
    }
    console.log(dev)

    return (
    <section class="cf w-100 pa2-ns">
      <div className="basic-info cf ph2-ns ">
        <AddCartButton devId={dev.id} />
        <div className="avatar fl w-100 w-25-m w-25-ns h5-ns pa2 db cb ">
          <img className="profile-img w-100 h5-ns h4-m" src={dev.avatarUrl}
                                             title="Avatar" />
        </div>
        <div className="contact-info fl w-25-m w-100 w-25-ns h5-ns pa2 ">
          <div className="ph3 white pv2 bb b--light-silver bg-black-70">
             Contact Info
          </div>
          <div className="h5-ns h4-m">
            <p>{dev.name}</p>
            <p>{dev.email}</p>
            <a href={dev.website}>{dev.website}</a>
            <p>{dev.location}</p>
            <p>R$ 150</p>
            <div className="profile-bio cf ph2-ns pa2 ">
              <article>{dev.bio}</article>
            </div>
          </div>
        </div>
        <div className="organizations fl w-50-m w-100 w-50-ns pa2 ">
          <OrganizationsPanel organizations={dev.organizations.slice(0,3)}
                              tilesPerRows={3} />
        </div>
      </div>


      <div className="programming-info cf ph2-ns ">
        <div className="dev-skills fl w-100 w-25-m w-25-ns pa2">
          <div className="stats-panel w-100 fl-m mb2">
            <StatsPanel nFollowers={dev.nFollowers}
                        nStars={dev.nStars}
                        nRepos={dev.nRepos} />
          </div>
          <div className="programming-languages w-100">
            <LanguagesPanel languages={dev.languages} />
          </div>
        </div>
        <div className="github-repos fl w-100 w-75-m w-75-ns pa2">
          <ReposPanel repos={dev.repos.slice(0,6)} tilesPerRows={3} />
        </div>
      </div>
    </section>
  );
  }
}

function mapStateToProps( {developers} ) {
  return { developers };
}

export default connect(mapStateToProps, { fetchSingleDeveloper })(Profile);
