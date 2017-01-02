import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from '../actions/session';

const initialState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('client') ? true : false,
  user: JSON.parse(localStorage.getItem('client')),
  errorMessage: ''
}

function session(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      }
    case LOGIN_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: true,
        user: action.user,
        errorMessage: ''
      }
    case LOGIN_FAILURE:
      return {
        isFetching: false,
        isAuthenticated: false,
        user: null,
        errorMessage: action.message
      }
    case LOGOUT_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: true
      }
    case LOGOUT_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: false,
        user: null,
        errorMessage: ''
      }
    case SIGNUP_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      }
    case SIGNUP_SUCCESS:
      return {
        isFetching: false,
        isAuthenticated: true,
        user: action.user,
        errorMessage: ''
      }
    case SIGNUP_FAILURE:
      return {
        isFetching: false,
        isAuthenticated: false,
        user: null,
        errorMessage: action.message
      }
    default:
      return state
  }
}

export default session
