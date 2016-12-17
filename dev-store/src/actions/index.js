import axios from 'axios';
import CatalogQuery from '../queries/catalog'

export const FETCH_DEVELOPERS = 'FETCH_DEVELOPERS';

export function fetchDevelopers(company) {
  const url = 'https://api.github.com/graphql';
  const config = {headers:
                    {'Authorization': 'bearer 68d7083aaeb10aa85af668e3da2ec8aa62a7b00c',
                     'Content-Type': 'application/json'}
                  }

  // request is a promise!
  const request = axios.post(url, CatalogQuery(company), config)
  return {
    type: FETCH_DEVELOPERS,
    payload: request
  };
}
