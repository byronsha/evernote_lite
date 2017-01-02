export const SHOW_NOTEBOOK_MODAL = 'SHOW_NOTEBOOK_MODAL'
export const HIDE_NOTEBOOK_MODAL = 'HIDE_NOTEBOOK_MODAL'

export function showNotebookModal() {
  return {
    type: SHOW_NOTEBOOK_MODAL,
    showing: true
  }
}

export function hideNotebookModal() {
  return {
    type: HIDE_NOTEBOOK_MODAL,
    showing: false
  }
}
