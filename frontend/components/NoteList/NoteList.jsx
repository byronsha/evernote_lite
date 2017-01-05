import React, { PropTypes } from 'react'
import NoteHeader from './NoteHeader'
import Note from './Note'

function NoteList({
  notes,
  isFetching,
  path
}) {
  return (
    <div className='list-menu'>
      <NoteHeader
        notes={notes}
      />

      <div className='note-list'>
        {notes.map(note =>
          <Note
            key={note.id}
            {...note}
            path={path}
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
