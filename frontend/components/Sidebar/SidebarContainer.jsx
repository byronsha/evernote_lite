import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/session'
import { showNoteList, showNotebookList } from '../../actions/listMenu'
import Sidebar from './Sidebar'

function mapStateToProps(state) {
  return {
    user: state.session.user,
    listMenu: state.listMenu
  }
}

const mapDispatchToProps = ({
  logoutUser,
  showNoteList,
  showNotebookList
})

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
