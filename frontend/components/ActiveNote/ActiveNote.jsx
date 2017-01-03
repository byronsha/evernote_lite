import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timestamp from 'react-timestamp'

class ActiveNote extends Component {
  findNoteById(notes, noteId) {
    for (var i = 0; i < notes.length; i++) {
      if (notes[i].id == noteId) {
        return notes[i]
      }
    }
  }

  render() {
    const { notes } = this.props
    const note = this.findNoteById(notes, this.props.params.noteId)

    if (!note) {
      return (<div></div>)
    }

    return (
      <div className='active-note'>
        <h1>{note.title}</h1>
        <Timestamp time={note.created_at} />
        <p>{note.content}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes.notes
  }
}

export default connect(
  mapStateToProps
)(ActiveNote)
