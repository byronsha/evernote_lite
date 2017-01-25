import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { deleteNotebook } from '../../actions/notebooks'
import { hideDeleteNotebookModal } from '../../actions/deleteNotebookModal'
import { setActiveNotebook } from '../../actions/activeNotebook'
import { fetchNotes } from '../../actions/notes'

class DeleteNotebookModal extends Component {
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
    const {
      isShowing, notebook, userId, deleteNotebook, hideDeleteNotebookModal,
      setActiveNotebook, fetchNotes
    } = this.props

    if (isShowing) {
      return (
        <div key='enter' className='ui small modal active'>
          <div className='header'>Delete notebook</div>
          <div className='content'>
            <p>You are about to DELETE notebook <b>{notebook.title}</b> AND all of it's notes!</p>
          </div>
          <div className='actions'>
            <div
              onClick={hideDeleteNotebookModal}
              className='ui red button'
            >
              Cancel
            </div>
            <div
              onClick={() => {
                deleteNotebook(notebook.id)
                setActiveNotebook(null)
                fetchNotes(userId)
                hideDeleteNotebookModal()
              }}
              className='ui blue button'
            >
              DELETE
            </div>
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
    isShowing: state.deleteNotebookModal.isShowing,
    notebook: state.deleteNotebookModal.notebook,
    userId: state.session.user.id
  }
}

const mapDispatchToProps = ({
  deleteNotebook,
  hideDeleteNotebookModal,
  setActiveNotebook,
  fetchNotes
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteNotebookModal)
