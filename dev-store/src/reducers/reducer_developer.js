import { FETCH_DEVELOPERS } from '../actions/index';

function cleanDevelopersData(response){
  const developers = response.data.organization.members.edges;
  return developers.map(
    (devData) => {
      const dev = devData.node;
      return {
        name: dev.name,
        location: dev.location,
        nRepos: dev.repositories.totalCount,
        nFollowers: dev.followers.totalCount,
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
      console.log(action.payload.data)
      return cleanDevelopersData(action.payload.data).concat(state);
    default:
      return state;
    }
}
