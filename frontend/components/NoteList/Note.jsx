import React from 'react'
import Timestamp from 'react-timestamp'
import { browserHistory } from 'react-router'

function Note({ note, path, showDeleteNoteModal }) {
  let className = 'note'
  if (path == `/home/${note.id}`) {
    className = 'note active'
  }

  return (
    <div
      className={className}
      onClick={() => {
        if (path == `/home/${note.id}`) { return }
        browserHistory.push(`/home/${note.id}`)
      }}
    >
      <span>{note.title}</span>
      <p><Timestamp time={note.created_at} /></p>
      <p>{note.content}</p>
      <i
        onClick={() => showDeleteNoteModal(note)}
        className='trash outline icon large'
      >
      </i>
    </div>
  )
}

export default Note
