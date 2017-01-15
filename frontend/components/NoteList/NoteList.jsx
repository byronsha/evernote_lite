import React, { PropTypes } from 'react'
import NoteHeader from './NoteHeader'
import Note from './Note'

function NoteList({
  notes,
  activeNotebook,
  isFetching,
  path,
  showDeleteNoteModal
}) {
  return (
    <div id='note-list-container'>
      <NoteHeader
        notes={notes}
        activeNotebook={activeNotebook}
      />

      <div className='note-list'>
        {notes.map(note =>
          <Note
            key={note.id}
            note={note}
            path={path}
            showDeleteNoteModal={showDeleteNoteModal}
          />
        )}
      </div>
    </div>
  )
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string
  }).isRequired).isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default NoteList
