import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

class NotebookDropdown extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e, data) {
    const { note, updateNote } = this.props
    const newNote = Object.assign(
      {},
      note,
      { notebook_id: data.value }
    )
    updateNote(newNote)
  }

  render() {
    const { note, notebooks } = this.props
    const options = notebooks.map(notebook => ({ value: notebook.id, text: notebook.title }))

    return (
      <Dropdown
        inline
        options={options}
        value={note.notebook_id}
        onChange={this.handleChange}
      />
    )
  }
}

export default NotebookDropdown
