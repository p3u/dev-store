import { FETCH_DEVELOPERS, FETCH_SINGLE_DEVELOPER } from '../actions/index';
import pricer from '../helpers/pricer';
import extractLanguages from '../helpers/extractLanguages';
import extractRepos from '../helpers/extractRepos';


function cleanDevelopersData(response){
  let developers = [];

  // When fetching developers from an organization
  if ('organization' in response.data) {
    developers = response.data.organization.members.edges;
  }

  // When fetching a single developer
  else if ('user' in response.data) {
    developers = [ {node: response.data.user } ];
  }

  return developers.map( (devData) => {
    const dev = devData.node;

    const languages = extractLanguages(dev.repositories.edges);
    const repos = extractRepos(dev.repositories.edges);
    const nStars = dev.repositories.edges.reduce(
      (total, {node: repo}) => { return total + repo.stargazers.totalCount },
      0
    );
    const nFollowers = dev.followers.totalCount;
    const nRepos = dev.repositories.totalCount;
    const wage = pricer( nRepos, languages.length, nFollowers, nStars);

    return {
      name: dev.name,
      location: dev.location,
      nRepos: nRepos,
      nFollowers: nFollowers,
      id: dev.login,
      websiteURL: dev.websiteURL,
      bio: dev.bio,
      email: dev.email,
      organizations: dev.organizations.edges.map(( {node : org} ) => org),
      repos: repos,
      languages: languages,
      avatarUrl: dev.avatarURL,
      nStars: nStars,
      wage: wage
    };
  });
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
