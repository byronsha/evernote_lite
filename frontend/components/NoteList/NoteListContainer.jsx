import React from 'react'
import { connect } from 'react-redux'
import { showDeleteNoteModal } from '../../actions/deleteNoteModal'
import NoteList from './NoteList'

function mapStateToProps(state) {
  return {
    isFetching: state.notes.isFetching,
    notes: state.notes.notes,
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
