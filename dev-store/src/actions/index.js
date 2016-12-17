import axios from 'axios';
import CatalogQuery from '../queries/catalog'
import { ACCESS_TOKEN } from './token.js'

export const FETCH_DEVELOPERS = 'FETCH_DEVELOPERS';
export const SET_CURRENT_ORGANIZATION = 'SET_CURRENT_ORGANIZATION';

export function fetchDevelopers(organization) {
  const url = 'https://api.github.com/graphql';
  const config = {headers:
                    {'Authorization': `bearer ${ACCESS_TOKEN}`,
                     'Content-Type': 'application/json'}
                  }

  // request is a promise!
  const request = axios.post(url, CatalogQuery(organization), config)
  return {
    type: FETCH_DEVELOPERS,
    payload: request
  };
}

export function setCurrentOrg(organization){
  console.log(organization)
  return {
    type: SET_CURRENT_ORGANIZATION,
    payload: organization
  }
}
