import React from 'react'
import { connect } from 'react-redux'
import { showAddNotebookModal } from '../../actions/addNotebookModal'
import { showDeleteNotebookModal } from '../../actions/deleteNotebookModal'
import { showNoteList } from '../../actions/listMenu'
import { setActiveNotebook } from '../../actions/activeNotebook'
import NotebookList from './NotebookList'

function mapStateToProps(state) {
  return {
    isFetching: state.notebooks.isFetching,
    notebooks: state.notebooks.notebooks
  }
}

const mapDispatchToProps = ({
  showAddNotebookModal,
  showDeleteNotebookModal,
  showNoteList,
  setActiveNotebook
})

const NotebookListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotebookList)

export default NotebookListContainer
