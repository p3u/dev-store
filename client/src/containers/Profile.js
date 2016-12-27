import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleDeveloper } from '../actions/index';
import LanguagesPanel from '../components/LanguagesPanel';
import ReposPanel from '../components/ReposPanel';
import OrganizationsPanel from '../components/OrganizationsPanel';
import StatsPanel from '../components/StatsPanel';
import ContactInfo from '../components/ContactInfo';
import ProfilePicturePanel from '../components/ProfilePicturePanel';
import AddCartButton from './AddCartButton';


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


  // The panels componenets could have been absctracted into one componenets
  // unfortunatly, I won't have time to do it :).
  // should have done it from the start!!!
  render(){
    const dev = this.state.developer
    if (dev === undefined){
      return <p> Loading </p>
    }

    return (
      <section className="cf w-100 pa2-ns">
        <AddCartButton devId={dev.id} />

        <div className="basic-info cf ph2-ns cb">
          <div className="fl w-100 w-40-m w-25-l pa2">
            <ProfilePicturePanel avatarUrl={dev.avatarUrl}/>
          </div>
          <div className="contact-info fl w-25-m w-100 w-25-l w-60-m pa2">
            <ContactInfo dev={dev}/>
          </div>
          <div className="organizations fl w-100 w-50-l pa2 ">
            <OrganizationsPanel organizations={dev.organizations.slice(0,3)}
                                tilesPerRows={3} />
          </div>
        </div>


        <div className="programming-info cf ph2-ns ">
          <div className="dev-skills fl w-100 w-25-l pa2">
            <div className="stats-panel w-100 pr2-m w-30-m fl-m mb2">
              <StatsPanel nFollowers={dev.nFollowers}
                          nStars={dev.nStars}
                          nRepos={dev.nRepos} />
            </div>
            <div className="programming-languages w-70-m w-100 fr">
              <LanguagesPanel languages={dev.languages} />
            </div>
          </div>
          <div className="github-repos fl w-100 w-75-l pa2">
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
