import React from 'react'
import { connect } from 'react-redux'
import NoteList from './NoteList'

function mapStateToProps(state) {
  return {
    isFetching: state.notes.isFetching,
    notes: state.notes.notes,
    path: state.routing.locationBeforeTransitions.pathname
  }
}

const NoteListContainer = connect(
  mapStateToProps,
)(NoteList)

export default NoteListContainer
