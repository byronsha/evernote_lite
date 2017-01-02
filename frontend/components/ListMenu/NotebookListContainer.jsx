import React from 'react'
import { connect } from 'react-redux'
import { deleteNotebook } from '../../actions/notebooks'
import { showNotebookModal } from '../../actions/notebookModal'
import NotebookList from './NotebookList'

const mapStateToProps = state => ({
  isFetching: state.notebooks.isFetching,
  notebooks: state.notebooks.notebooks
})

const mapDispatchToProps = ({
  deleteNotebook,
  showNotebookModal
})

const NotebookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookList)

export default NotebookListContainer
