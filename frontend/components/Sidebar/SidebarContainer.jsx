import React from 'react'
import { connect } from 'react-redux'
import { createNote } from '../../actions/notes'
import { hideNotebookList, showNotebookList } from '../../actions/notebooks'
import { setActiveNotebook } from '../../actions/activeNotebook'
import { logoutUser } from '../../actions/session'
import Sidebar from './Sidebar'

function mapStateToProps(state) {
  return {
    user: state.session.user,
    listMenu: state.listMenu,
    notebooks: state.notebooks.notebooks,
    routing: state.routing
  }
}

const mapDispatchToProps = ({
  createNote,
  showNotebookList,
  hideNotebookList,
  setActiveNotebook,
  logoutUser
})

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
