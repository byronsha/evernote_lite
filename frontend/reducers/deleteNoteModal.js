import {
  SHOW_DELETE_NOTE_MODAL,
  HIDE_DELETE_NOTE_MODAL
} from '../actions/deleteNoteModal'

const initialState = {
  isShowing: false,
  note: null
}

function deleteNoteModal(state = initialState, action) {
  switch (action.type) {
    case SHOW_DELETE_NOTE_MODAL:
      return {
        isShowing: true,
        note: action.note
      }
    case HIDE_DELETE_NOTE_MODAL:
      return {
        isShowing: false,
        note: null
      }
    default:
      return state
  }
}

export default deleteNoteModal
