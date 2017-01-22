import React from 'react'

function NoteHeader({notes, activeNotebook}) {
  return (
    <div className='note-header'>
      <h2>{activeNotebook ? activeNotebook.title : 'All Notes'}</h2>
      <span>{notes.length} notes</span>
    </div>
  )
}

export default NoteHeader
