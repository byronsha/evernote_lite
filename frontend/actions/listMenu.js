export const SHOW_NOTEBOOK_LIST = 'SHOW_NOTEBOOK_LIST'
export const SHOW_NOTE_LIST = 'SHOW_NOTE_LIST'

export function showNoteList() {
  return {
    type: SHOW_NOTE_LIST,
    listMenu: 'NOTES'
  }
}

export function showNotebookList() {
  return {
    type: SHOW_NOTEBOOK_LIST,
    listMenu: 'NOTEBOOKS'
  }
}
