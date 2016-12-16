import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render(){
    return (


      <section class="cf w-100 pa2-ns">
        <div className="basic-info cf ph2-ns ba">
          <div className="avatar fl w-100 w-50-m w-third-ns pa2 ba">
            <img className="profile-img h5 w5" src="http://tachyons.io/img/avatar_1.jpg" title="Kitty staring at you" />
          </div>
          <div className="contact-info fl w-50-m w-100 w-third-ns pa2 ba">
            <p>Developer Name</p>
            <p>pedro.saadi.aquino@gmail.com</p>
            <a href="#">p3u.github.io/Portifolio</a>
            <p>Rio de Janeiro</p>
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
          <article>Full Stack Developer. Working with React, React Native and other cool things!</article>
        </div>


        <div className="programming-info w-100-m cf ph2-ns ba">
          <div className="dev-skills fl w-100 w-100-m w-25-ns pa2 ba">
            <div className="programming-languages w-50-m fl-m ba v2">
              <ul>
                <li>Javascript</li>
                <li>CofeeScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Python</li>
                <li>C#</li>
              </ul>
            </div>
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

export default Profile
