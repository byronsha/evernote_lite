import React from 'react'

const NotebookHeader = ({ notebooks }) => (
  <div className='notebook-header'>
    <h2>Notebooks</h2>
    <span>{notebooks.length} notebooks</span>
    <i className="plus square outline icon big"></i>
  </div>
)

export default NotebookHeader
