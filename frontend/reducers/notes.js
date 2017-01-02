import {
  REQUEST_NOTES,
  RECEIVE_NOTES
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
    default:
      return state
  }
}

export default notes
