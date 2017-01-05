import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { createNotebook } from '../../actions/notebooks'
import { hideAddNotebookModal } from '../../actions/addNotebookModal'

class AddNotebookModal extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName='modal-animation'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {this.renderModal()}
      </ReactCSSTransitionGroup>
    )
  }

  renderModal() {
    const { isShowing, createNotebook, hideAddNotebookModal } = this.props

    let title
    let description

    if (isShowing) {
      return (
        <div key='enter' className='ui small modal active'>
          <div className='header'>Create notebook</div>
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
                hideAddNotebookModal()
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
              onClick={hideAddNotebookModal}
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
    } else {
      return <div key='leave'></div>
    }
  }
}

function mapStateToProps(state) {
  return {
    isShowing: state.addNotebookModal
  }
}

const mapDispatchToProps = ({
  createNotebook,
  hideAddNotebookModal
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNotebookModal)
