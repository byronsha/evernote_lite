import React from 'react'

function Content({note, updateNote}) {
  let content
  return (
    <div className='active-note-content'>
      <textarea
        type='text'
        value={note.content}
        placeholder='Just start typing...'
        ref={ref => { content = ref }}
        spellCheck='false'
        onChange={() => {
          const newNote = Object.assign(
            {},
            note,
            { content: content.value }
          )
          updateNote(newNote)
        }}
        >
      </textarea>
    </div>
  )
}

export default Content
