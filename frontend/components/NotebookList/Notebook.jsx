import React from 'react'
import Timestamp from 'react-timestamp'

function Notebook({
  notebook,
  hideNotebookList,
  setActiveNotebook,
  showDeleteNotebookModal,
}) {
  return (
    <div
      className='notebook'
      onClick={() => {
        setActiveNotebook(notebook)
        hideNotebookList()
    }}>
      <span className='notebook-title'>{notebook.title}</span>
      <span className='timestamp'><Timestamp time={notebook.created_at} /></span>

      {notebook.description && <p>{notebook.description}</p>}

      <i
        onClick={() => showDeleteNotebookModal(notebook)}
        className='trash outline icon large'
      >
      </i>
    </div>
  )
}

export default Notebook
