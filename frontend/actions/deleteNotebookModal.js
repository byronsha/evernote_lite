export const SHOW_DELETE_NOTEBOOK_MODAL = 'SHOW_DELETE_NOTEBOOK_MODAL'
export const HIDE_DELETE_NOTEBOOK_MODAL = 'HIDE_DELETE_NOTEBOOK_MODAL'

export function showDeleteNotebookModal(notebook) {
  return {
    type: SHOW_DELETE_NOTEBOOK_MODAL,
    notebook
  }
}

export function hideDeleteNotebookModal() {
  return {
    type: HIDE_DELETE_NOTEBOOK_MODAL
  }
}
