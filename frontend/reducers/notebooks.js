import {
  // request actions
  REQUEST_NOTEBOOKS,
  CREATE_NOTEBOOK_INITIATED,
  DELETE_NOTEBOOK_INITIATED,
  // response actions
  RECEIVE_NOTEBOOKS,
  NOTEBOOK_CREATED,
  NOTEBOOK_DELETED,
  // ui actions
  SHOW_NOTEBOOK_LIST,
  HIDE_NOTEBOOK_LIST
} from '../actions/notebooks'

const initialState = {
  notebooks: [],
  isFetching: false,
  isPanelShowing: false
}

function notebooks(state = initialState, action) {
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
        notebooks: [action.notebook].concat(state.notebooks),
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
    case SHOW_NOTEBOOK_LIST:
      return {
        ...state,
        isPanelShowing: true
      }
    case HIDE_NOTEBOOK_LIST:
      return {
        ...state,
        isPanelShowing: false
      }
    default:
      return state
  }
}

export default notebooks
