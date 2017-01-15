import {
  SET_ACTIVE_NOTEBOOK
} from '../actions/activeNotebook'

function activeNotebook(state = null, action) {
  switch (action.type) {
    case SET_ACTIVE_NOTEBOOK:
      return action.notebook
    default:
      return state
  }
}

export default activeNotebook
