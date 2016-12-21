import axios from 'axios';

export const FETCH_DEVELOPERS = 'FETCH_DEVELOPERS';
export const SET_CURRENT_ORGANIZATION = 'SET_CURRENT_ORGANIZATION';
export const FETCH_SINGLE_DEVELOPER = 'FETCH_SINGLE_DEVELOPER';

const BASE_URL  = `http://${window.location.hostname}:5000/api`

export function fetchDevelopers(organization, pagination=0) {
  // request is a promise!
  const request = axios.get(`${BASE_URL}/devs/${organization}/${pagination}`);
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
  const request = axios.get(`${BASE_URL}/dev/${login}`);
  return {
    type: FETCH_SINGLE_DEVELOPER,
    payload: request
  }
}
