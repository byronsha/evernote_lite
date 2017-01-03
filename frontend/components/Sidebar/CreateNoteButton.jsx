import React from 'react'

function CreateNoteButton({
  notebooks,
  routing,
  createNote,
  showNoteList
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
            title: 'Untitled',
            content: ''
          })
          showNoteList()
        }
      }}
    >
      <i className='plus icon blue large'></i>
    </div>
  )
}

export default CreateNoteButton
