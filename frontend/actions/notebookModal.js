export const SHOW_NOTEBOOK_MODAL = 'SHOW_NOTEBOOK_MODAL'
export const HIDE_NOTEBOOK_MODAL = 'HIDE_NOTEBOOK_MODAL'

export const showNotebookModal = () => ({
  type: SHOW_NOTEBOOK_MODAL,
  showing: true
})

export const hideNotebookModal = () => ({
  type: HIDE_NOTEBOOK_MODAL,
  showing: false
})
