import React from 'react'

function NotebookHeader({ notebooks, showAddNotebookModal }) {
  return (
    <div className='notebook-header'>
      <h2>Notebooks</h2>
      <span>{notebooks.length} notebooks</span>
      <i
        onClick={showAddNotebookModal}
        className="plus square outline icon big"
      >
      </i>
    </div>
  )
}

export default NotebookHeader
