import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const REQUEST_NOTEBOOKS = 'REQUEST_NOTEBOOKS';
export const RECEIVE_NOTEBOOKS = 'RECEIVE_NOTEBOOKS';
export const CREATE_NOTEBOOK_INITIATED = 'CREATE_NOTEBOOK_INITIATED';
export const NOTEBOOK_CREATED = 'NOTEBOOK_CREATED';

export const requestNotebooks = userId => ({
  type: REQUEST_NOTEBOOKS,
  userId
})

export const receiveNotebooks = notebooks => ({
  type: RECEIVE_NOTEBOOKS
  notebooks
})

export const fetchNotebooks = userId => dispatch => {
  dispatch(requestNotebooks(userId));

  return axios.get('http://localhost:3000/api/notebooks', { user_id: userId })
    .then((response) => {
      console.log(response)
      // dispatch(receiveNotebooks(response.notebooks))
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
  dispatch(createNotebookInitiated(notebook));

  return axios.post('http://localhost:3000/api/notebooks', { notebook: notebook})
    .then((response) => {
      console.log(response)
      // dispatch(notebookCreated(response.notebook))
    })
    .catch((error) => {
      console.log(error)
    })
}
