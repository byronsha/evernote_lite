export const SHOW_ADD_NOTEBOOK_MODAL = 'SHOW_ADD_NOTEBOOK_MODAL'
export const HIDE_ADD_NOTEBOOK_MODAL = 'HIDE_ADD_NOTEBOOK_MODAL'

export function showAddNotebookModal() {
  return {
    type: SHOW_ADD_NOTEBOOK_MODAL
  }
}

export function hideAddNotebookModal() {
  return {
    type: HIDE_ADD_NOTEBOOK_MODAL
  }
}
