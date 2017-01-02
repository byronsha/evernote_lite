import React from 'react'

const NotebookHeader = ({ notebooks, showNotebookModal }) => (
  <div className='notebook-header'>
    <h2>Notebooks</h2>

    <span>{notebooks.length} notebooks</span>

    <i
      onClick={showNotebookModal}
      className="plus square outline icon big"
    >
    </i>
  </div>
)

export default NotebookHeader
