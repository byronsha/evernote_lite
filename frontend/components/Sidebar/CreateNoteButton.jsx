import React from 'react'

function CreateNoteButton({
  notebooks,
  routing,
  createNote,
  hideNotebookList
}) {
  return (
    <div
      className='create-note-button'
      onClick={() => {
        if (notebooks.length === 0) {
          console.log('Create a notebook first')
        } else {
          createNote({
            notebook_id: notebooks[0].id,
            title: '',
            content: ''
          })
          hideNotebookList()
        }
      }}
    >
      <i className='plus icon blue large'></i>
    </div>
  )
}

export default CreateNoteButton
