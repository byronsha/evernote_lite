import React from 'react'
import Timestamp from 'react-timestamp'

function Notebook({ notebook, showDeleteNotebookModal }) {
  return (
    <div className='notebook'>
      <span>{notebook.title}</span>
      <p>{notebook.description}</p>
      <p><Timestamp time={notebook.created_at} /></p>
      <i onClick={() => showDeleteNotebookModal(notebook)} className="trash outline icon large"></i>
    </div>
  )
}

export default Notebook
