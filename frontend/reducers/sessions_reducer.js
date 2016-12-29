import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS
} from '../actions/session_actions';

const sessions = (state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('client') ? true : false,
  user: null,
  errorMessage: ''
}, action) => {
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
    default:
      return state
  }
}

export default sessions;
