import {
  REQUEST_NOTEBOOKS,
  RECEIVE_NOTEBOOKS,
  CREATE_NOTEBOOK_INITIATED,
  NOTEBOOK_CREATED,
  DELETE_NOTEBOOK_INITIATED,
  NOTEBOOK_DELETED
} from '../actions/notebook_actions';

const notebooks = (state = {
  notebooks: [],
  isFetching: false
}, action) => {
  switch (action.type) {
    case REQUEST_NOTEBOOKS:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_NOTEBOOKS:
      return {
        notebooks: action.notebooks,
        isFetching: false
      }
    case CREATE_NOTEBOOK_INITIATED:
      return {
        ...state,
        isFetching: true
      }
    case NOTEBOOK_CREATED:
      return {
        notebooks: state.notebooks.concat(action.notebook),
        isFetching: false
      }
    case DELETE_NOTEBOOK_INITIATED:
      return {
        ...state,
        isFetching: true
      }
    case NOTEBOOK_DELETED:
      return {
        notebooks: state.notebooks.filter(notebook =>
          notebook.id !== action.notebookId
        ),
        isFetching: false
      }
    default:
      return state
  }
}

export default notebooks;
