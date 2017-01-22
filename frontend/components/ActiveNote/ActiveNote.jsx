import React, { Component } from 'react'
import NotebookDropdown from './NotebookDropdown'
import Title from './Title'
import Content from './Content'
import Timestamp from 'react-timestamp'

class ActiveNote extends Component {
  render() {
    const { note, notebooks, deleteNote, updateNote } = this.props
    let title
    let content

    if (!note) { return <div></div> }

    return (
      <div className='active-note-container'>
        <div className='active-note'>
          <div className='active-note-toolbar'>
            <NotebookDropdown
              note={note}
              notebooks={notebooks}
              updateNote={updateNote}
            />
            <span className='timestamp'>created <Timestamp time={note.created_at} /></span>
            <span className='timestamp'>, updated <Timestamp time={note.updated_at} /></span>
          </div>

          <Title note={note} updateNote={updateNote} />
          <Content note={note} updateNote={updateNote} />
        </div>
      </div>
    )
  }
}

export default ActiveNote
