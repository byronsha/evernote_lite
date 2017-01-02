import { push } from 'react-router-redux';
import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

// login actions
export function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    creds
  }
}

export function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    user
  }
}

export function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    message
  }
}

export function loginUser(creds) {
  return function(dispatch) {
    dispatch(requestLogin(creds));

    return axios.post('http://localhost:3000/api/sessions', { user: creds })
      .then((res) => {
        const user = res.data.user;

        if (user) {
          localStorage.setItem('client', JSON.stringify(user));
          dispatch(receiveLogin(user));
          dispatch(push('/home'));
        } else {
          const message = res.data.errors[0];
          dispatch(loginError(message));
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
}

// logout actions
export function requestLogout() {
  return {
    type: LOGOUT_REQUEST
  }
}

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logoutUser() {
  return function(dispatch) {
    dispatch(requestLogout());
    localStorage.removeItem('client');
    dispatch(receiveLogout())
    dispatch(push('/login'));
  }
}


// signup actions
export function requestSignUp(creds) {
  return {
    type: SIGNUP_REQUEST,
    creds
  }
}

export function receiveSignUp(user) {
  return {
    type: SIGNUP_SUCCESS,
    user
  }
}

export function signUpError(message) {
  return {
    type: SIGNUP_FAILURE,
    message
  }
}

export function signUpUser(creds) {
  return function(dispatch) {
    dispatch(requestSignUp(creds))

    return axios.post(`http://localhost:3000/api/users`, { user: creds })
      .then((res) => {
        const user = res.data.user;

        if (user) {
          localStorage.setItem('client', JSON.stringify(user))
          dispatch(receiveSignUp(user))
          dispatch(push('/home'))
        } else {
          const message = res.data.errors[0]
          dispatch(signUpError(message))
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
