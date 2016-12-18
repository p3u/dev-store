import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchSingleDeveloper } from '../actions/index';
import LanguagesPanel from './LanguagesPanel';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { developer: undefined };
  }

  componentWillMount() {
    // This perfomance could be improved if I used a hash (object) instead
    // of looping over the array of devs. But I think it's perfectionism
    // since it's unlikely that this array will grow so much that a O(n)
    // operation becomes slow.

    // A little convoluted... needs to be cleaned
    // Looping over devs, if not found, fetch
    // Once fetch promise is resolved, loop again to grab fetched dev
    let developer  = this.props.developers.find((dev) => dev.id === this.props.params.id);
    this.setState( {developer} );
    if ( developer === undefined ){
      this.props.fetchSingleDeveloper(this.props.params.id)
      .then( () => {
        developer = this.props.developers.find((dev) => dev.id === this.props.params.id);
        this.setState( {developer} );
      });
    }
  }

  render(){
    console.log("hi")
    const dev = this.state.developer
    if (dev === undefined){
      return <p> Loading </p>
    }
    debugger
    return (
      <section class="cf w-100 pa2-ns">
        <div className="basic-info cf ph2-ns ba">
          <div className="avatar fl w-100 w-50-m w-third-ns pa2 ba">
            <img className="profile-img h5 w5" src={dev.avatarUrl} title="Kitty staring at you" />
          </div>
          <div className="contact-info fl w-50-m w-100 w-third-ns pa2 ba">
            <p>{dev.name}</p>
            <p>{dev.email}</p>
            <a href={dev.website}>{dev.website}</a>
            <p>{dev.location}</p>
            <p>R$ 150</p>
          </div>
          <div className="organizations fl w-50-m w-100 w-third-ns pa2 ba">
            <div className="organizations-row cf ph2-ns ba">
              <div className="org-card fl w-100 w-third-ns pa2 ba">org1</div>
              <div className="org-card fl w-100 w-third-ns pa2 ba">org2</div>
              <div className="org-card fl w-100 w-third-ns pa2 ba">org3</div>
            </div>
            <div className="organizations-row cf ph2-ns ba">
              <div className="org-card fl w-100 w-third-ns pa2 ba">org4</div>
              <div className="org-card fl w-100 w-third-ns pa2 ba">org5</div>
              <div className="org-card fl w-100 w-third-ns pa2 ba">org6</div>
            </div>
          </div>
        </div>

        <div className="profile-bio cf ph2-ns pa2 ba">
          <article>{dev.bio}</article>
        </div>


        <div className="programming-info w-100-m cf ph2-ns ba">
          <div className="dev-skills fl w-100 w-100-m w-25-ns pa2 ba">
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
          <div className="github-repos fl w-100 w-100-m w-75-ns pa2 ba">
            <div className="repo-row cf ph2-ns ba">
              <div className="repo-card fl w-100 w-third-ns pa2 ba">
                <h4>Repo Title</h4>
                <p>Repo description about the subject which in the ends means nothing but fools you</p>
                <p>Repo Language</p>
              </div>
              <div className="repo-card fl w-100 w-third-ns pa2 ba">
                <h4>Repo Title</h4>
                <p>Repo description about the subject which in the ends means nothing but fools you</p>
                <p>Repo Language</p>
              </div>
              <div className="repo-card fl w-100 w-third-ns pa2 ba">
                <h4>Repo Title</h4>
                <p>Repo description about the subject which in the ends means nothing but fools you</p>
                <p>Repo Language</p>
              </div>
            </div>
            <div className="repo-row cf ph2-ns ba">
              <div className="repo-card fl w-100 w-third-ns pa2 ba">
                <h4>Repo Title</h4>
                <p>Repo description about the subject which in the ends means nothing but fools you</p>
                <p>Repo Language</p>
              </div>
              <div className="repo-card fl w-100 w-third-ns pa2 ba">
                <h4>Repo Title</h4>
                <p>Repo description about the subject which in the ends means nothing but fools you</p>
                <p>Repo Language</p>
              </div>
              <div className="repo-card fl w-100 w-third-ns pa2 ba">
                <h4>Repo Title</h4>
                <p>Repo description about the subject which in the ends means nothing but fools you</p>
                <p>Repo Language</p>
              </div>
            </div>
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
