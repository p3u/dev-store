import React from 'react';

export default function StatsPanel( {nStars, nFollowers, nRepos} ){
  return (
    <div className="w-100 bg-white">
      <ul className="list pl0 ml0 mv0 center ">
        <li className="pl2 white pv2 bg-black-70">
          <i className="fa fa-github" aria-hidden="true" /> Github Stats
        </li>
        <li className="pl2 pv2 ba b--dotted b--light-silver">
          <i className="fa fa-rss light-blue" aria-hidden="true" />
          {` ${nFollowers} followers`}
        </li>
        <li className="pl2 pv2 ba b--dotted b--light-silver">
          <i className="fa fa-star yellow" aria-hidden="true" />
          {` ${nStars} stars`}
        </li>
        <li className="pl2 pv2 ba b--dotted b--light-silver">
          <i className="fa fa-upload silver" aria-hidden="true" />
          {` ${nRepos} Repos`}
        </li>
      </ul>
    </div>
  );
}
