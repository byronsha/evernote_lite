import {
  SHOW_ADD_NOTEBOOK_MODAL,
  HIDE_ADD_NOTEBOOK_MODAL
} from '../actions/addNotebookModal'

function addNotebookModal(state = false, action) {
  switch (action.type) {
    case SHOW_ADD_NOTEBOOK_MODAL:
      return true
    case HIDE_ADD_NOTEBOOK_MODAL:
      return false
    default:
      return state
  }
}

export default addNotebookModal
