import React, { Component } from 'react'
import Timestamp from 'react-timestamp'

class ActiveNote extends Component {
  render() {
    const { note, deleteNote, updateNote } = this.props
    let title
    let content

    if (!note) {
      return (<div></div>)
    }

    return (
      <div className='active-note-container'>
        <div className='active-note'>
          <div className='active-note-toolbar'>
            created <Timestamp time={note.created_at} />
            , updated <Timestamp time={note.updated_at} />
          </div>

          <div className='active-note-title'>
            <input
              type='text'
              value={note.title}
              ref={ref => { title = ref }}
              spellCheck='false'
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

          <div className='active-note-content'>
            <textarea
              type='text'
              value={note.content}
              placeholder='Just start typing...'
              ref={ref => { content = ref}}
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
        </div>
      </div>
    )
  }
}

export default ActiveNote
