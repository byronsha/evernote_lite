import {
  REQUEST_NOTEBOOKS,
  RECEIVE_NOTEBOOKS,
  CREATE_NOTEBOOK_INITIATED,
  NOTEBOOK_CREATED
} from '../actions/notebook_actions';

const notebooks = (state = {
  isFetching: false,
  items: []
}, action) = {
  switch (action.type) {
    case REQUEST_NOTEBOOKS:
      // return
    default:
      return state
  }
}

export default notebooks;
