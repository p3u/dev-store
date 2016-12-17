import React from 'react';

function calculateDevPrice(devData) {
  return Math.round(Math.random()*1000)
}

export default function Card({devInfo}) {
  const devWage = calculateDevPrice(devInfo);
  console.log(devInfo);
  return (
    <article className="dev-card mw5 br3 pb3 ph4 ma3 ba b--black-10 dib">
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

        <img src={devInfo.avatarUrl} className="br-100 h3 w3 dib" title="Kitty staring at you" />

        <div className="dev-info">
          <h1 className="f4">{devInfo.name}</h1>
          <p className="f6 gray mv1">{devInfo.organization}</p>

          <hr className="mw3 bb bw1 b--black-10" />

          <p className="lh-copy measure center f6 black-70">
          {devInfo.bio}
          </p>
        </div>
        <p className="mb5 green dev-wage">R$ {devWage}/h</p>
      </div>
    </article>
  );
}
