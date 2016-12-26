import React from 'react';
import _ from 'lodash';

// I could make a component for a single RepoTile, but I think it's over decoupling.
// If I need one RepoTile I can simply send an array with one repo to this component.

function renderRepoTile(repo, idx) {
  console.log(repo)
  return (
    <div key={idx} className="repo-card overflow-y-auto bg-white fl w-100 h-100 w-third-ns pa2 ba b--dotted b--light-silver">
      <h4 className="dib hyphenate mv3">{repo.name}</h4>
      <div className="dib fr mv3 mr1">
        <i className="fa fa-star gray" aria-hidden="true" />
        {' ' + repo.stars}
      </div>
      <p>{repo.description}</p>
    </div>
  );
}

function renderRepoRow(repos, key) {
  console.log(repos)
   return (
        <div key={key} className="repo-row h5 cf">
          { repos.map( (repo, idx) => renderRepoTile(repo, idx) )  }
        </div>
   );
}

export default function ReposPanel( {repos: allRepos, tilesPerRows} ){
  const reposRows = _.chunk(allRepos, tilesPerRows);
  return (
    <div className="w-100">
      <div className="ph3 white pv2 bb b--light-silver bg-black-70">
        <i className="fa fa-upload" aria-hidden="true" /> Popular Repositories
       </div>
       { reposRows.map( (repos, idx) => renderRepoRow(repos, idx) )  }
    </div>
  );
}
