import React from 'react'
import CreateNoteButton from './CreateNoteButton'
import NotesButton from './NotesButton'
import NotebooksButton from './NotebooksButton'

function Sidebar({
  user,
  listMenu,
  notebooks,
  routing,
  createNote,
  showNoteList,
  showNotebookList,
  logoutUser
}) {
  return (
    <div className='sidebar'>
      <CreateNoteButton
        notebooks={notebooks}
        routing={routing}
        createNote={createNote}
        showNoteList={showNoteList}
      />
      <NotesButton
        listMenu={listMenu}
        showNoteList={showNoteList}
      />
      <NotebooksButton
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
