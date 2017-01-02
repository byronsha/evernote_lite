import React from 'react'

function Sidebar({
  user,
  listMenu,
  logoutUser,
  showNoteList,
  showNotebookList
}) {
  const style = {
    outline: '1px solid black'
  }

  return (
    <div className='sidebar'>
      <div
        onClick={showNoteList}
        className='note-list-button'
        style={listMenu === 'NOTES' ? style : null}
      >
        <i className='file text icon blue large'></i>
      </div>

      <div
        onClick={showNotebookList}
        className='notebook-list-button'
        style={listMenu === 'NOTEBOOKS' ? style : null}
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
}

export default Sidebar
