import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/session'
import Sidebar from './Sidebar'

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated,
  errorMessage: state.session.errorMessage,
  user: state.session.user
})

const mapDispatchToProps = ({
  logoutUser
})

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)

export default SidebarContainer
