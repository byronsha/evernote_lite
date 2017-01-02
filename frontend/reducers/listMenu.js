import {
  SHOW_NOTEBOOK_LIST,
  SHOW_NOTE_LIST
} from '../actions/listMenu'

function listMenu(state = 'NOTEBOOKS', action) {
  switch (action.type) {
    case SHOW_NOTEBOOK_LIST:
      return action.listMenu
    case SHOW_NOTE_LIST:
      return action.listMenu
    default:
      return state
  }
}

export default listMenu
