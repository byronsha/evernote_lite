import React from 'react'
import Timestamp from 'react-timestamp'

function Notebook({
  notebook,
  showDeleteNotebookModal,
  showNoteList,
  setActiveNotebook
}) {
  return (
    <div
      className='notebook'
      onClick={() => {
        setActiveNotebook(notebook.id)
        showNoteList()
    }}>
      <span>{notebook.title}</span>
      <p>{notebook.description}</p>
      <p><Timestamp time={notebook.created_at} /></p>
      <i
        onClick={() => showDeleteNotebookModal(notebook)}
        className='trash outline icon large'
      >
      </i>
    </div>
  )
}

export default Notebook
