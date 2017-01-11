import React from 'react'
import { connect } from 'react-redux'
import { showDeleteNoteModal } from '../../actions/deleteNoteModal'
import NoteList from './NoteList'

function getVisibleNotes(notes, notebookId) {
  if (notebookId === null) {
    return notes
  }

  return notes.filter(note =>
    note.notebook_id == notebookId
  )
}

function mapStateToProps(state) {
  return {
    isFetching: state.notes.isFetching,
    notes: getVisibleNotes(state.notes.notes, state.activeNotebook),
    path: state.routing.locationBeforeTransitions.pathname
  }
}

const mapDispatchToProps = ({
  showDeleteNoteModal
})

const NoteListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList)

export default NoteListContainer
