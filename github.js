import axios from 'axios';
import { GH_TOKEN, GH_CLIENT_ID, GH_CLIENT_SECRET } from './tokens';

const url = 'https://api.github.com/graphql';
const config = { headers: { 'Authorization': `bearer ${GH_TOKEN}`,
                            'Content-Type': 'application/json' }
               };

function query(queryName, term, confirmationSearch=false, endCursor) {
  console.log(endCursor)
  // If no confirmationSearch needed, just do the search
  if(!confirmationSearch) {
    return axios.post(url, queryName(term, endCursor), config);
  }

  // Else, check for query limits
  return axios.get('https://api.github.com/rate_limit?' +
                              `client_id=${GH_CLIENT_ID}&` +
                              `client_secret=${GH_CLIENT_SECRET}`
                  )
    // if all is good, request search
    // if limits are over, don't do the search, just go straight for the main query
    .then( (res) => {
        let remainingReq = res.data.resources.search.remaining;
        if (remainingReq < 1) return axios.post(url, queryName(term, endCursor), config);
        return axios.get('https://api.github.com/search/users?' +
                                `q=${term}+type:org&` +
                                `client_id=${GH_CLIENT_ID}&` +
                                `client_secret=${GH_CLIENT_SECRET}`
                        )
        // Do the main query...
        .then( (res) => {
          let newTerm = res.data.total_count > 0 ? res.data.items[0].login : term;
          return axios.post(url, queryName(newTerm, endCursor), config);;
        });
    });
}

export const gh = {
  query: query
};
