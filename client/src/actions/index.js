import axios from 'axios';

export const FETCH_DEVELOPERS = 'FETCH_DEVELOPERS';
export const SET_CURRENT_ORGANIZATION = 'SET_CURRENT_ORGANIZATION';
export const FETCH_SINGLE_DEVELOPER = 'FETCH_SINGLE_DEVELOPER';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const FETCH_CART = 'FETCH_CART';
export const UPDATE_DEV_HOURS = 'UPDATE_DEV_HOURS';


const BASE_URL  = `http://${window.location.hostname}:5000/api`

export function fetchDevelopers(organization, endCursor=0) {
  // request is a promise!
  const request = axios.get(`${BASE_URL}/devs/${organization}/${endCursor}`);
  return {
    type: FETCH_DEVELOPERS,
    payload: request
  };
}

export function setCurrentOrg(organization) {
  return {
    type: SET_CURRENT_ORGANIZATION,
    payload: organization
  }
}

export function fetchSingleDeveloper(login) {
  const request = axios.get(`${BASE_URL}/dev/${login}`);
  return {
    type: FETCH_SINGLE_DEVELOPER,
    payload: request
  }
}

export function addToCart(login, userid) {
  const request = axios.post(`${BASE_URL}/cart/add/${userid}/${login}`);
  return {
    type: ADD_TO_CART,
    payload: request
  }
}

export function removeFromCart(login, userid) {
  const request = axios.delete(`${BASE_URL}/cart/delete/${userid}/${login}`);
  return {
    type: REMOVE_FROM_CART,
    payload: request
  }
}

export function fetchCart(userid) {
  const request = axios.get(`${BASE_URL}/cart/${userid}`);
  return {
    type: FETCH_CART,
    payload: request
  }
}

export function updateDevHours(login, hours, userid) {
  const request = axios.put(`${BASE_URL}/cart/edit/hours/${userid}/${login}/${hours}`);
  return {
    type: UPDATE_DEV_HOURS,
    payload: request
  }
}
