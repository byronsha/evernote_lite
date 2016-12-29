import {
  REQUEST_NOTEBOOKS,
  RECEIVE_NOTEBOOKS,
  CREATE_NOTEBOOK_INITIATED,
  NOTEBOOK_CREATED
} from '../actions/notebook_actions';

const notebooks = (state = {
  isFetching: false,
  items: []
}, action) => {
  switch (action.type) {
    case REQUEST_NOTEBOOKS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_NOTEBOOKS:
      return {
        isFetching: false,
        items: action.notebooks
      }
    case CREATE_NOTEBOOK_INITIATED:
      return {
        ...state,
        isFetching: true
      }
    case NOTEBOOK_CREATED:
      return {
        isFetching: false,
        items: state.items.concat(action.notebook)
      }
    default:
      return state
  }
}

export default notebooks;
