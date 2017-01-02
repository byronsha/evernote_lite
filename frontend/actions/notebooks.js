import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const REQUEST_NOTEBOOKS = 'REQUEST_NOTEBOOKS'
export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS'
export const CREATE_NOTEBOOK_INITIATED = 'CREATE_NOTEBOOK_INITIATED'
export const NOTEBOOK_CREATED = 'NOTEBOOK_CREATED'
export const DELETE_NOTEBOOK_INITIATED = 'DELETE_NOTEBOOK_INITIATED'
export const NOTEBOOK_DELETED = 'NOTEBOOK_DELETED'

export function requestNotebooks(userId) {
  return {
    type: REQUEST_NOTEBOOKS,
    userId
  }
}

export function receiveNotebooks(notebooks) {
  return {
    type: RECEIVE_NOTEBOOKS,
    notebooks
  }
}

export function fetchNotebooks(userId) {
  return function(dispatch) {
    dispatch(requestNotebooks(userId))

    return axios.get(`http://localhost:3000/api/notebooks?user_id=${userId}`)
      .then((response) => {
        const notebooks = response.data.notebooks
        dispatch(receiveNotebooks(notebooks))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function createNotebookInitiated(notebook) {
  return {
    type: CREATE_NOTEBOOK_INITIATED,
    notebook
  }
}

export function notebookCreated(notebook) {
  return {
    type: NOTEBOOK_CREATED,
    notebook
  }
}

export function createNotebook(notebook) {
  return function(dispatch) {
    dispatch(createNotebookInitiated(notebook))

    return axios.post(`http://localhost:3000/api/notebooks`, { notebook: notebook })
      .then((response) => {
        const notebook = response.data.notebook
        dispatch(notebookCreated(notebook))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export function deleteNotebookInitiated(notebookId) {
  return {
    type: DELETE_NOTEBOOK_INITIATED,
    notebookId
  }
}

export function notebookDeleted(notebookId) {
  return {
    type: NOTEBOOK_DELETED,
    notebookId
  }
}

export function deleteNotebook(notebookId) {
  return function(dispatch) {
    dispatch(deleteNotebookInitiated(notebookId))

    return axios.delete(`http://localhost:3000/api/notebooks/${notebookId}`)
      .then((response) => {
        dispatch(notebookDeleted(notebookId))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
