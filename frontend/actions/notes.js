import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const REQUEST_NOTES = 'REQUEST_NOTES'
export const RECEIVE_NOTES = 'RECEIVE_NOTES'
export const CREATE_NOTE_INITIATED = 'CREATE_NOTE_INITIATED'
export const NOTE_CREATED = 'NOTE_CREATED'
export const DELETE_NOTE_INITIATED = 'DELETE_NOTE_INITIATED'
export const NOTE_DELETED = 'NOTE_DELETED'

export function requestNotes(userId) {
  return {
    type: REQUEST_NOTES,
    userId
  }
}

export function receiveNotes(notes) {
  return {
    type: RECEIVE_NOTES,
    notes
  }
}

export function fetchNotes(userId) {
  return function(dispatch) {
    dispatch(requestNotes(userId))

    return axios.get(`http://localhost:3000/api/notes?user_id=${userId}`)
    .then((response) => {
      const notes = response.data.notes
      dispatch(receiveNotes(notes))
    })
    .catch((error) => {
      console.log(error)
    })
  }
}
