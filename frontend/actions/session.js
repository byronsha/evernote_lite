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

export const requestLogin = creds => ({
  type: LOGIN_REQUEST,
  creds
})

export const receiveLogin = user => ({
  type: LOGIN_SUCCESS,
  user
})

export const loginError = message => ({
  type: LOGIN_FAILURE,
  message
})

export const loginUser = creds => dispatch => {
  dispatch(requestLogin(creds));

  return axios.post('http://localhost:3000/api/sessions', { user: creds })
    .then((res) => {
      const user = res.data.user;

      if (user) {
        localStorage.setItem('client', JSON.stringify(user));
        dispatch(receiveLogin(user));
        dispatch(push('/dashboard'));
      } else {
        const message = res.data.errors[0];
        dispatch(loginError(message));
      }
    })
    .catch((err) => {
      console.log(err);
    })
}

export const requestLogout = () => ({
  type: LOGOUT_REQUEST
})

export const receiveLogout = () => ({
  type: LOGOUT_SUCCESS
})

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());
  localStorage.removeItem('client');
  dispatch(receiveLogout())
  dispatch(push('/'));
}

export const requestSignUp = creds => ({
  type: SIGNUP_REQUEST,
  creds
})

export const receiveSignUp = user => ({
  type: SIGNUP_SUCCESS,
  user
})

export const signUpError = message => ({
  type: SIGNUP_FAILURE,
  message
})

export const signUpUser = creds => dispatch => {
  dispatch(requestSignUp(creds))

  return axios.post(`http://localhost:3000/api/users`, { user: creds })
    .then((res) => {
      const user = res.data.user;

      if (user) {
        localStorage.setItem('client', JSON.stringify(user))
        dispatch(receiveSignUp(user))
        dispatch(push('/dashboard'))
      } else {
        const message = res.data.errors[0]
        dispatch(signUpError(message))
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
