import React from 'react'
import { connect } from 'react-redux'
import { createNotebook } from '../../actions/notebook_actions'

let AddNotebookContainer = ({ dispatch }) => {
  let title
  let description

  return (
    <div className='add-notebook-form'>
      <form onSubmit={e => {
        e.preventDefault()
        if (!title.value.trim()) {
          return
        }
        dispatch(createNotebook({ title: title.value, description: description.value }))
        title.value = ''
        description.value = ''
      }}>
        <input ref={node => {
          title = node
        }} />
        <input ref={node => {
          description = node
        }} />
        <button type='submit'>
          Add Notebook
        </button>
      </form>
    </div>
  )
}
AddNotebookContainer = connect()(AddNotebookContainer)

export default AddNotebookContainer
