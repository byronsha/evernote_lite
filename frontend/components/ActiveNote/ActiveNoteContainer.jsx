import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActiveNote from './ActiveNote'
import Timestamp from 'react-timestamp'
import { deleteNote, updateNote } from '../../actions/notes'

function findNoteById(notes, noteId) {
  for (var i = 0; i < notes.length; i++) {
    if (notes[i].id == noteId) {
      return notes[i]
    }
  }
}

function mapStateToProps(state, ownProps) {
  return {
    note: findNoteById(state.notes.notes, ownProps.params.noteId),
    notebooks: state.notebooks.notebooks
  }
}

const mapDispatchToProps = ({
  deleteNote,
  updateNote
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveNote)
