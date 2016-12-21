import axios from 'axios';
import { GITHUB_TOKEN } from './tokens';

function query(queryName, params) {
  const queryRequest = axios.post(this.url, queryName(params), this.config);
  console.log(queryRequest)
  return queryRequest;
}

export const gh = {
  url: 'https://api.github.com/graphql',
  config: { headers: { 'Authorization': `bearer ${GITHUB_TOKEN}`,
                       'Content-Type': 'application/json' }
          },
  searchOrgName: 'placeholder', // TODO: Find a way to query for the right org name
  query: query
};
