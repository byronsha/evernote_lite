import React from 'react'
import { connect } from 'react-redux'
import { createNotebook } from '../../actions/notebooks'

let AddNotebook = ({ dispatch }) => {
  let title
  let description

  return (
    <div className='add-notebook'>
      <form onSubmit={e => {
        e.preventDefault()
        if (!title.value.trim()) { return }

        dispatch(createNotebook({ title: title.value, description: description.value }))
        title.value = ''
        description.value = ''
      }}>
        <input ref={node => { title = node }} />
        <input ref={node => { description = node }} />

        <button type='submit'>
          Add Notebook
        </button>
      </form>
    </div>
  )
}
AddNotebook = connect()(AddNotebook)

export default AddNotebook
