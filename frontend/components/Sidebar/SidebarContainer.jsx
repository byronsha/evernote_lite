import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/session'
import { showNoteList, showNotebookList } from '../../actions/listMenu'
import Sidebar from './Sidebar'

const mapStateToProps = state => ({
  user: state.session.user
})

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
