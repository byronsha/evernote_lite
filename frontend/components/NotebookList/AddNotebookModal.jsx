import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createNotebook } from '../../actions/notebooks'
import { hideNotebookModal } from '../../actions/notebookModal'

class NotebookModal extends Component {
  render() {
    const { isOpen, createNotebook, hideNotebookModal } = this.props
    const className = isOpen ? 'ui small modal active' : 'ui small modal'

    let title
    let description

    return (
      <div className={className}>
        <div className='header'>
          Create notebook
        </div>

        <div className='content'>
          <form
            id='add-notebook-form'
            className='ui form'
            onSubmit={e => {
              e.preventDefault()
              if (!title.value.trim()) { return }

              createNotebook({ title: title.value, description: description.value })
              title.value = ''
              description.value = ''
              hideNotebookModal()
          }}>
            <div className='field'>
              <label>Title</label>
              <input
                type='text'
                ref={ref => { title = ref }}
              />
            </div>
            <div className='field'>
              <label>Description</label>
              <input
                type='text'
                ref={ref => { description = ref }}
              />
            </div>
          </form>
        </div>

        <div className='actions'>
          <div
            onClick={hideNotebookModal}
            className='ui red button'
          >
            Cancel
          </div>
          <button
            type='submit'
            form='add-notebook-form'
            className='ui blue button'
          >
            Create Notebook
          </button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isOpen: state.notebookModal
  }
}

const mapDispatchToProps = ({
  createNotebook,
  hideNotebookModal
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookModal)
