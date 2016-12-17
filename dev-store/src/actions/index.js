import axios from 'axios';
import CatalogQuery from '../queries/catalog'
import { ACCESS_TOKEN } from './token.js'

export const FETCH_DEVELOPERS = 'FETCH_DEVELOPERS';

export function fetchDevelopers(company) {
  const url = 'https://api.github.com/graphql';
  const config = {headers:
                    {'Authorization': `bearer ${ACCESS_TOKEN}`,
                     'Content-Type': 'application/json'}
                  }

  // request is a promise!
  const request = axios.post(url, CatalogQuery(company), config)
  return {
    type: FETCH_DEVELOPERS,
    payload: request
  };
}
