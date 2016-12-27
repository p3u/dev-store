import React from 'react';
import '../style/Card.css';
import { Link } from 'react-router';

function renderShortDescription(bio, languages) {
  // If dev doesn't have a description, we will just render the languages he knows.
  if (bio) return bio;
  let shortDescription = '';
  if (languages.length > 0) {
    shortDescription = languages.reduce((text, languages) => {
      return text + `${languages.name}, `
    }, 'Programs in ');
  }

  return shortDescription.slice(0, -2)
}

export default function Card({devInfo}) {
  return (
    <Link to={`/profile/${devInfo.id}`} className="card-link gray">
      <article className="dev-card border-box br3 pa1 mv2-ns mv1 mh2-l mh1-m mh0 w-20-l w-30-m w-100 ba b--black-10 dib">
        <div className="tc">
          <nav className="center">
            <div className="nowrap">
              <p className="dim f8 f8-ns dib mh2">
                <i className="fa fa-rss gray" aria-hidden="true" />
                {' ' + devInfo.nFollowers}
              </p>
              <p className="dim f8 f8-ns dib mh2">
                <i className="fa fa-star gray" aria-hidden="true" />
                {' ' + devInfo.nStars}
              </p>
              <p className="dim f8 f8-ns dib mh2">
                <i className="fa fa-upload gray" aria-hidden="true" />
                {' ' + devInfo.nRepos}
              </p>
            </div>
          </nav>

          <img src={devInfo.avatarUrl} className="br-100 h3 w3 dib" title="Developer" alt="Developer" />

          <div className="dev-info">
            <h1 className="f4">{devInfo.name}</h1>
            <p className="f6 gray mv1">{devInfo.organization}</p>

            <hr className="mw3 bb bw1 b--black-10" />
            <div className="overflow-y-auto h4">
            <p className="lh-copy measure center f6 black-70">
              {renderShortDescription(devInfo.bio, devInfo.languages)}
            </p>
            </div>
          </div>
          <p className="mb5 green dev-wage">R$ {devInfo.wage}/h</p>
        </div>
      </article>
    </Link>
  );
}
