import { browserHistory } from 'react-router'
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
        if (notes.length > 0) {
          browserHistory.push(`/home/${notes[0].id}`)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function createNoteInitiated(note) {
  return {
    type: CREATE_NOTE_INITIATED,
    note
  }
}

export function noteCreated(note) {
  return {
    type: NOTE_CREATED,
    note
  }
}

export function createNote(note) {
  return function(dispatch) {
    dispatch(createNoteInitiated(note))

    return axios.post(`http://localhost:3000/api/notes`, { note: note })
      .then((response) => {
        const note = response.data.note
        dispatch(noteCreated(note))
        browserHistory.push(`/home/${note.id}`)
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function deleteNoteInitiated(noteId) {
  return {
    type: DELETE_NOTE_INITIATED,
    noteId
  }
}

export function noteDeleted(noteId) {
  return {
    type: NOTE_DELETED,
    noteId
  }
}

export function deleteNote(noteId) {
  return function(dispatch) {
    dispatch(deleteNoteInitiated(noteId))

    return axios.delete(`http://localhost:3000/api/notes/${noteId}`)
      .then((response) => {
        dispatch(noteDeleted(noteId))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
