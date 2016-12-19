import { FETCH_DEVELOPERS, FETCH_SINGLE_DEVELOPER } from '../actions/index';

function cleanDevelopersData(response){
  let developers = [];
  if ('organization' in response.data) {
    developers = response.data.organization.members.edges;
  }
  else if ('user' in response.data) {
    developers = [ {node: response.data.user } ];
  }
  return developers.map(
    (devData) => {
      const dev = devData.node;
      let languagesName = [];
      let languages = [];
      dev.repositories.edges.forEach( ({ node: repo}) => { //Destructuring + alias
                  repo.languages.edges.forEach( ({ node: language }) => { //Destructuring + alias
                    if( !languagesName.includes(language.name) ){
                      languages.push(language);
                      languagesName.push(language.name);
                    }
                  });
                });

      return {
        name: dev.name,
        location: dev.location,
        nRepos: dev.repositories.totalCount,
        nFollowers: dev.followers.totalCount,
        id: dev.login,
        websiteURL: dev.websiteURL,
        bio: dev.bio,
        email: dev.email,
        organizations: dev.organizations.edges.map(( {node : org} ) => org),
        repos: dev.repositories.edges.map(
          ( {node: repo} ) => ({ name: repo.name,
                                 description: repo.description,
                                 stars: repo.stargazers.totalCount }) )
                                 .sort( ({stars: a},{stars: b}) => b-a),
        languages: languages,
        avatarUrl: dev.avatarURL,
        nStars: dev.repositories.edges
                        .reduce( (total, {node: repo}) => {
                                  return total + repo.stargazers.totalCount },
                               0)
      };
    }
  );
}

export default function(state = [], action) {
    switch (action.type) {
    case FETCH_DEVELOPERS:
      return cleanDevelopersData(action.payload.data).concat(state);
    case FETCH_SINGLE_DEVELOPER:
      return cleanDevelopersData(action.payload.data).concat(state);
    default:
      return state;
    }
}
