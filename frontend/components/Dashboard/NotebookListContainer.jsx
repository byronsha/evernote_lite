import React from 'react'
import { connect } from 'react-redux'
import { deleteNotebook } from '../../actions/notebook_actions'
import NotebookList from './NotebookList'

const mapStateToProps = state => ({
  isFetching: state.notebooks.isFetching,
  notebooks: state.notebooks.notebooks
})

const mapDispatchToProps = ({
  deleteNotebook
})

const NotebookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookList)

export default NotebookListContainer
