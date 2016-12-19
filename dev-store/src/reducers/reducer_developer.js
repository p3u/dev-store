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
          ( {node: repo} ) => ({ name: repo.name, description: repo.description })
        ),
        languages: languages,
        // nContibutedRepos: dev.contributedRepos.totalCount,
        avatarUrl: dev.avatarURL,
        nStars: 300 // TODO: Calculate nStars
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