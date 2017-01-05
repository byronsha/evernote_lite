import {
  SHOW_DELETE_NOTEBOOK_MODAL,
  HIDE_DELETE_NOTEBOOK_MODAL
} from '../actions/deleteNotebookModal'

const initialState = {
  isShowing: false,
  notebook: null
}

function deleteNotebookModal(state = initialState, action) {
  switch (action.type) {
    case SHOW_DELETE_NOTEBOOK_MODAL:
      return {
        isShowing: true,
        notebook: action.notebook
      }
    case HIDE_DELETE_NOTEBOOK_MODAL:
      return {
        isShowing: false,
        notebook: null
      }
    default:
      return state
  }
}

export default deleteNotebookModal
