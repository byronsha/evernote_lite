import React from 'react'

function NotebooksButton({ listMenu, showNotebookList }) {
  return (
    <div
      className='notebooks-button'
      onClick={showNotebookList}
    >
      <i className='book icon blue large'></i>
    </div>
  )
}

export default NotebooksButton
