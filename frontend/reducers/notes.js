import {
  REQUEST_NOTES,
  RECEIVE_NOTES,
  CREATE_NOTE_INITIATED,
  NOTE_CREATED,
  DELETE_NOTE_INITIATED,
  NOTE_DELETED
} from '../actions/notes'

const initialState = {
  notes: [],
  isFetching: false
}

function notes(state = initialState, action) {
  switch (action.type) {
    case REQUEST_NOTES:
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_NOTES:
      return {
        notes: action.notes,
        isFetching: false
      }
    case CREATE_NOTE_INITIATED:
      return {
        ...state,
        isFetching: true
      }
    case NOTE_CREATED:
      return {
        notes: state.notes.concat(action.note),
        isFetching: false
      }
    case DELETE_NOTE_INITIATED:
      return {
        ...state,
        isFetching: true
      }
    case NOTE_DELETED:
      return {
        notes: state.notes.filter(note =>
          note.id !== action.noteId
        ),
        isFetching: false
      }
    default:
      return state
  }
}

export default notes
