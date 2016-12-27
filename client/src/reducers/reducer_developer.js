import { FETCH_DEVELOPERS, FETCH_SINGLE_DEVELOPER } from '../actions/index';
import pricer from '../helpers/pricer';
import extractLanguages from '../helpers/extractLanguages';
import extractRepos from '../helpers/extractRepos';


// This function works both when fetching a singleDev or fetching devs from an org.
function cleanDevelopersData(response, url) {
  let developers = [];

  if(response.errors) {
    // This is a quick hack because I won't have time to deliever a proper solution!
    console.log('ERROR:', response.errors);
    if(!url) return [{bio: response.errors[0], organizations: []}]
    let parsedURL = url.split("/");
    parsedURL.pop();
    const orgName = parsedURL.pop()
    return [{name: 'Sorry!', bio: response.errors[0].message, nFollowers:0,
             nStars:0, nRepos:0, wage:0, avatarUrl: 'http://developers.google.com/maps/documentation/static-maps/images/error-image-generic.png',
             id: 'warning-message', organizations: [{login: orgName}],
             repos: [], languages: []}]
  }

  // When fetching developers from an organization
  if ('organization' in response.data) {
    developers = response.data.organization.members.edges;

    // This is a quick hack because I won't have time to deliever a proper solution!
    if (developers.length === 0) {
      return [{name: 'Sorry!', bio: 'This organization has no members',
               nFollowers:0, nStars:0, nRepos:0, wage:0, id: 'warning-message',
               avatarUrl: 'http://developers.google.com/maps/documentation/static-maps/images/error-image-generic.png',
               organizations: [{login: response.data.organization.login}],
               repos: [], languages: []}]
    }
  }

  // When fetching a single developer
  else if ('user' in response.data) {
    developers = [ {node: response.data.user } ];
  }

  // Just map over devs and extract/format the data
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
      const URL = action.payload.request.responseURL;
      return state.concat( cleanDevelopersData(action.payload.data, URL) );

    case FETCH_SINGLE_DEVELOPER:
      return state.concat( cleanDevelopersData(action.payload.data) );

    default:
      return state;
    }
}
