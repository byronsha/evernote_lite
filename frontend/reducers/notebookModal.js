import {
  SHOW_NOTEBOOK_MODAL,
  HIDE_NOTEBOOK_MODAL
} from '../actions/notebookModal'

function notebookModal(state = false, action) {
  switch (action.type) {
    case SHOW_NOTEBOOK_MODAL:
      return action.showing
    case HIDE_NOTEBOOK_MODAL:
      return action.showing
    default:
      return state
  }
}

export default notebookModal
