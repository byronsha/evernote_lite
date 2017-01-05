import React from 'react'
import { connect } from 'react-redux'
import { showAddNotebookModal } from '../../actions/addNotebookModal'
import { showDeleteNotebookModal } from '../../actions/deleteNotebookModal'
import NotebookList from './NotebookList'

function mapStateToProps(state) {
  return {
    isFetching: state.notebooks.isFetching,
    notebooks: state.notebooks.notebooks
  }
}

const mapDispatchToProps = ({
  showAddNotebookModal,
  showDeleteNotebookModal
})

const NotebookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookList)

export default NotebookListContainer
