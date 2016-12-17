import axios from 'axios';
import CatalogQuery from '../queries/catalog'

export const FETCH_DEVELOPERS = 'FETCH_DEVELOPERS';

export function fetchDevelopers(company) {
  const url = 'https://api.github.com/graphql';
  const config = {headers:
                    {'Authorization': 'bearer bf7332db04fd82619ae2bfc819245fc4fd76ea45',
                     'Content-Type': 'application/json'}
                  }

  // request is a promise!
  const request = axios.post(url, CatalogQuery(company), config)
  return {
    type: FETCH_DEVELOPERS,
    payload: request
  };
}
