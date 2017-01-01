import React from 'react'

const Sidebar = ({
  user,
  logoutUser,
  showNoteList,
  showNotebookList
}) => (
  <div className='sidebar'>
    <div
      onClick={showNoteList}
      className='note-list-button'
    >
      <i className='file text icon blue large'></i>
    </div>

    <div
      onClick={showNotebookList}
      className='notebook-list-button'
    >
      <i className='book icon blue large'></i>
    </div>

    <button
       onClick={logoutUser}
       className='circular ui icon blue button logout-button'
    >
      <i className='power icon large'></i>
    </button>
  </div>
)

export default Sidebar
