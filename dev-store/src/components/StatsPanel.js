import React from 'react';

export default function StatsPanel( {nStars, nFollowers, nRepos} ){
  return (
    <div className="w-100">
      <ul className="list pl0 ml0 mv0 center ba b--light-silver">
        <li className="ph3 white pv2 bb b--light-silver bg-black-70">
          <i className="fa fa-github" aria-hidden="true" /> Github Stats
        </li>
        <li className="ph3 pv2 bb b--light-orange">
          <i className="fa fa-rss light-blue" aria-hidden="true" />
          {` ${nFollowers} followers`}
        </li>
        <li className="ph3 pv2 bb b--light-silver">
          <i className="fa fa-star yellow" aria-hidden="true" />
          {` ${nStars} stars`}
        </li>
        <li className="ph3 pv2 bb b--light-silver">
          <i className="fa fa-upload silver" aria-hidden="true" />
          {` ${nRepos} Repos`}
        </li>
      </ul>
    </div>
  );
}
