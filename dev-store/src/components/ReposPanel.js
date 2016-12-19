import React from 'react';
import _ from 'lodash';

// I could make a component for a single RepoTile, but I think it's over decoupling.
// If I need one RepoTile I can simply send an array with one repo to this component.

function renderRepoTile(repo, idx) {
  console.log(repo)
  return (
    <div key={idx} className="repo-card fl w-100 h-100 w-third-ns pa2 ba">
      <h4 className="dib mv3">{repo.name}</h4>
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
        <div key={key} className="repo-row h5 cf ph2-ns ba">
          { repos.map( (repo, idx) => renderRepoTile(repo, idx) )  }
        </div>
   );
}

export default function LanguagesPanel( {repos: allRepos, tilesPerRows} ){
  const reposRows = _.chunk(allRepos, tilesPerRows);
  return (
    <div className="github-repos fl w-100 w-100-m w-75-ns pa2 ba">
       { reposRows.map( (repos, idx) => renderRepoRow(repos, idx) )  }
    </div>
  );
}
