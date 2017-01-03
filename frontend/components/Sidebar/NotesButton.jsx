import React from 'react'

function NotesButton({ listMenu, showNoteList }) {
  return (
    <div
      onClick={showNoteList}
      className='notes-button'
    >
      <i className='file text icon blue large'></i>
    </div>
  )
}

export default NotesButton
