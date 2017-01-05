export const SHOW_DELETE_NOTE_MODAL = 'SHOW_DELETE_NOTE_MODAL'
export const HIDE_DELETE_NOTE_MODAL = 'HIDE_DELETE_NOTE_MODAL'

export function showDeleteNoteModal(note) {
  return {
    type: SHOW_DELETE_NOTE_MODAL,
    note
  }
}

export function hideDeleteNoteModal() {
  return {
    type: HIDE_DELETE_NOTE_MODAL
  }
}
