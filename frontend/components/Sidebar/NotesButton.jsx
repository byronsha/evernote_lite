import React from 'react'

function NotesButton({ listMenu, hideNotebookList, setActiveNotebook }) {
  return (
    <div
      className='notes-button'
      onClick={() => {
        hideNotebookList()
        setActiveNotebook(null)
    }}>
      <i className='file text icon blue large'></i>
    </div>
  )
}

export default NotesButton
