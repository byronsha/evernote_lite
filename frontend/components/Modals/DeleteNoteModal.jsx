import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import { deleteNote } from '../../actions/notes'
import { hideDeleteNoteModal } from '../../actions/deleteNoteModal'

class DeleteNoteModal extends Component {
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
    const { isShowing, note, deleteNote, hideDeleteNoteModal } = this.props

    if (isShowing) {
      return (
        <div key='enter' className='ui small modal active'>
          <div className='header'>Delete note</div>
          <div className='content'>
            <p>You are about to DELETE note <b>{note.title}</b></p>
          </div>
          <div className='actions'>
            <div
              onClick={hideDeleteNoteModal}
              className='ui red button'
            >
              Cancel
            </div>
            <div
              onClick={() => {
                deleteNote(note.id)
                hideDeleteNoteModal()
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
    isShowing: state.deleteNoteModal.isShowing,
    note: state.deleteNoteModal.note
  }
}

const mapDispatchToProps = ({
  deleteNote,
  hideDeleteNoteModal
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteNoteModal)
