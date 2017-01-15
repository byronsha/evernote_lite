export const SET_ACTIVE_NOTEBOOK = 'SET_ACTIVE_NOTEBOOK'

export function setActiveNotebook(notebook) {
  return {
    type: SET_ACTIVE_NOTEBOOK,
    notebook
  }
}
