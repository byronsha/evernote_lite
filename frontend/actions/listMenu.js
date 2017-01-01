export const SHOW_NOTEBOOK_LIST = 'SHOW_NOTEBOOK_LIST'
export const SHOW_NOTE_LIST = 'SHOW_NOTE_LIST'

export const showNoteList = () => ({
  type: SHOW_NOTE_LIST,
  listMenu: 'NOTES'
})

export const showNotebookList = () => ({
  type: SHOW_NOTEBOOK_LIST,
  listMenu: 'NOTEBOOKS'
})
