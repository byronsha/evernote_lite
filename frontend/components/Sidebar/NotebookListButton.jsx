import React from 'react'

function NotebookListButton({ listMenu, showNotebookList }) {
  return (
    <div
      onClick={showNotebookList}
      className='notebook-list-button'
    >
      <i className='book icon blue large'></i>
    </div>
  )
}

export default NotebookListButton
