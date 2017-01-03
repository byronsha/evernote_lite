import React from 'react'
import NoteListButton from './NoteListButton'
import NotebookListButton from './NotebookListButton'

function Sidebar({
  user,
  listMenu,
  logoutUser,
  showNoteList,
  showNotebookList
}) {
  return (
    <div className='sidebar'>
      <NoteListButton
        listMenu={listMenu}
        showNoteList={showNoteList}
      />
      <NotebookListButton
        listMenu={listMenu}
        showNotebookList={showNotebookList}
      />
      <button
        onClick={logoutUser}
        className='circular ui icon blue button logout-button'
      >
        <i className='power icon large'></i>
      </button>
    </div>
  )
}

export default Sidebar
