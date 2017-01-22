import React from 'react'

function Title({note, updateNote}) {
  let title
  return (
    <div className='active-note-title'>
      <input
        type='text'
        value={note.title}
        ref={ref => { title = ref }}
        spellCheck='false'
        placeholder='Title...'
        onChange={() => {
          const newNote = Object.assign(
            {},
            note,
            { title: title.value }
          )
          updateNote(newNote)
        }}
      >
      </input>
    </div>
  )
}

export default Title
