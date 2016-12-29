import { push } from 'react-router-redux';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const requestLogin = (creds) => ({
  type: LOGIN_REQUEST,
  creds
})

export const receiveLogin = (user) => ({
  type: LOGIN_SUCCESS,
  user
})

export const loginError = (message) => ({
  type: LOGIN_FAILURE,
  message
})

export const loginUser = (creds) => {
  return dispatch => {
    dispatch(requestLogin(creds));

    return axios.post('http://localhost:3000/api/sessions', { user: creds })
    .then((response) => {
      const user = response.data.user;

      if (user) {
        localStorage.setItem('client', user.username);
        dispatch(receiveLogin(user.username));
        dispatch(push('/dashboard'));
      } else {
        const message = response.data.errors[0];
        dispatch(loginError(message));
      }
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

export const requestLogout = () => ({
  type: LOGOUT_REQUEST,
  isFetching: true,
  isAuthenticated: true
})

export const receiveLogout = () => ({
  type: LOGOUT_SUCCESS,
  isFetching: false,
  isAuthenticated: false
})

export const logoutUser = () => {
  return dispatch => {
    dispatch(requestLogout());
    localStorage.removeItem('client');
    dispatch(receiveLogout())
    dispatch(push('/'));
  }
}
