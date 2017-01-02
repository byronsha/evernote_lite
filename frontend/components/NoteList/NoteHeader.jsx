import React from 'react'

function NoteHeader({ notes }) {
  return (
    <div className='note-header'>
      <h2>Notes</h2>

      <span>{notes.length} notes</span>
    </div>
  )
}

export default NoteHeader
