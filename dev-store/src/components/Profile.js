import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSingleDeveloper } from '../actions/index';
import LanguagesPanel from './LanguagesPanel';
import ReposPanel from './ReposPanel';
import OrganizationsPanel from './OrganizationsPanel';

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
    console.log(dev)
    if (dev === undefined){
      return <p> Loading </p>
    }
      return (
      <section class="cf w-100 pa2-ns">
        <div className="basic-info cf ph2-ns ba">
          <div className="avatar fl w-100 w-50-m w-third-ns pa2 ba">
            <img className="profile-img h5 w5" src={dev.avatarUrl}
                                               title="Avatar" />
          </div>
          <div className="contact-info fl w-50-m w-100 w-third-ns pa2 ba">
            <p>{dev.name}</p>
            <p>{dev.email}</p>
            <a href={dev.website}>{dev.website}</a>
            <p>{dev.location}</p>
            <p>R$ 150</p>
          </div>
          <OrganizationsPanel organizations={dev.organizations.slice(0,3)}
                              tilesPerRows={3} />
        </div>

        <div className="profile-bio cf ph2-ns pa2 ba">
          <article>{dev.bio}</article>
        </div>


        <div className="programming-info w-100-m cf ph2-ns ba">
          <div className="dev-skills fl w-100 w-100-m w-25-ns pa2">
            <LanguagesPanel languages={dev.languages} />
            <div className="github-badges w-100 w-50-m fl-m ba v2">
              <ul>
                <li>100</li>
                <li>CofeeScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>C#</li>
              </ul>
            </div>
          </div>
           <ReposPanel repos={dev.repos.slice(0,6)} tilesPerRows={3} />
        </div>
      </section>
    );
  }
}

function mapStateToProps( {developers} ) {
  return { developers };
}

export default connect(mapStateToProps, { fetchSingleDeveloper })(Profile);
