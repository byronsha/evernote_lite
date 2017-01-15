import React from 'react'
import { connect } from 'react-redux'
import { hideNotebookList } from '../../actions/notebooks'
import { setActiveNotebook } from '../../actions/activeNotebook'
import { showAddNotebookModal } from '../../actions/addNotebookModal'
import { showDeleteNotebookModal } from '../../actions/deleteNotebookModal'
import NotebookList from './NotebookList'

function mapStateToProps(state) {
  return {
    notebooks: state.notebooks.notebooks,
    isFetching: state.notebooks.isFetching,
    isPanelShowing: state.notebooks.isPanelShowing
  }
}

const mapDispatchToProps = ({
  showAddNotebookModal,
  showDeleteNotebookModal,
  hideNotebookList,
  setActiveNotebook
})

const NotebookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookList)

export default NotebookListContainer
