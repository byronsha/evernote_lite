import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const REQUEST_NOTEBOOKS = 'REQUEST_NOTEBOOKS'
export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS'
export const CREATE_NOTEBOOK_INITIATED = 'CREATE_NOTEBOOK_INITIATED'
export const NOTEBOOK_CREATED = 'NOTEBOOK_CREATED'
export const DELETE_NOTEBOOK_INITIATED = 'DELETE_NOTEBOOK_INITIATED'
export const NOTEBOOK_DELETED = 'NOTEBOOK_DELETED'

export const requestNotebooks = userId => ({
  type: REQUEST_NOTEBOOKS,
  userId
})

export const receiveNotebooks = notebooks => ({
  type: RECEIVE_NOTEBOOKS,
  notebooks
})

export const fetchNotebooks = userId => dispatch => {
  dispatch(requestNotebooks(userId))

  return axios.get(`http://localhost:3000/api/notebooks`, { user_id: userId })
    .then((response) => {
      const notebooks = response.data.notebooks
      dispatch(receiveNotebooks(notebooks))
    })
    .catch((error) => {
      console.log(error)
    })
}

export const createNotebookInitiated = notebook => ({
  type: CREATE_NOTEBOOK_INITIATED,
  notebook
})

export const notebookCreated = notebook => ({
  type: NOTEBOOK_CREATED,
  notebook
})

export const createNotebook = notebook => dispatch => {
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

export const deleteNotebookInitiated = notebookId => ({
  type: DELETE_NOTEBOOK_INITIATED,
  notebookId
})

export const notebookDeleted = notebookId => ({
  type: NOTEBOOK_DELETED,
  notebookId
})

export const deleteNotebook = notebookId => dispatch => {
  dispatch(deleteNotebookInitiated(notebookId))

  return axios.delete(`http://localhost:3000/api/notebooks/${notebookId}`)
    .then((response) => {
      dispatch(notebookDeleted(notebookId))
    })
    .catch((error) => {
      console.log(error)
    })
}
