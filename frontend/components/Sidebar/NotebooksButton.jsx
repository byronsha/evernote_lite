import React from 'react'

function NotebooksButton({ listMenu, showNotebookList }) {
  return (
    <div onClick={showNotebookList} className='notebooks-button'>
      <i className='book icon blue large'></i>
    </div>
  )
}

export default NotebooksButton
