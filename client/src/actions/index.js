import axios from 'axios';
import CatalogQuery from '../queries/catalog';
import SingleDevQuery from '../queries/SingleDevQuery';
import { ACCESS_TOKEN } from './token.js';

export const FETCH_DEVELOPERS = 'FETCH_DEVELOPERS';
export const SET_CURRENT_ORGANIZATION = 'SET_CURRENT_ORGANIZATION';
export const FETCH_SINGLE_DEVELOPER = 'FETCH_SINGLE_DEVELOPER';

const url = 'https://api.github.com/graphql';
const config = {headers:
                  {'Authorization': `bearer ${ACCESS_TOKEN}`,
                   'Content-Type': 'application/json'}
                }

export function fetchDevelopers(organization) {
  // request is a promise!
  const request = axios.post(url, CatalogQuery(organization), config)
  return {
    type: FETCH_DEVELOPERS,
    payload: request
  };
}

export function setCurrentOrg(organization){
  return {
    type: SET_CURRENT_ORGANIZATION,
    payload: organization
  }
}

export function fetchSingleDeveloper(login){
  const request = axios.post(url, SingleDevQuery(login), config)
  return {
    type: FETCH_SINGLE_DEVELOPER,
    payload: request
  }
}
