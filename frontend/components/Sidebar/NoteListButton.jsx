import React from 'react'

function NoteListButton({ listMenu, showNoteList }) {
  return (
    <div
      onClick={showNoteList}
      className='note-list-button'
    >
      <i className='file text icon blue large'></i>
    </div>
  )
}

export default NoteListButton
