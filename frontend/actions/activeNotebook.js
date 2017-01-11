export const SET_ACTIVE_NOTEBOOK = 'SET_ACTIVE_NOTEBOOK'

export function setActiveNotebook(notebookId) {
  return {
    type: SET_ACTIVE_NOTEBOOK,
    notebookId
  }
}
