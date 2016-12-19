import React from 'react';
import _ from 'lodash';

// I could make a component for a single RepoTile, but I think it's over decoupling.
// If I need one RepoTile I can simply send an array with one repo to this component.

function renderRepoTile(repo, idx) {
  return (
    <div key={idx} className="repo-card fl w-100 w-third-ns pa2 ba">
      <h4>{repo.name}</h4>
      <p>{repo.description}</p>
    </div>
  );
}

function renderRepoRow(repos, key) {
  console.log(repos)
   return (
        <div key={key} className="repo-row cf ph2-ns ba">
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
