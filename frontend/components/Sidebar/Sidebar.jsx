import React from 'react'
import LogoutButton from './LogoutButton'

const Sidebar = ({ isAuthenticated, errorMessage, user, logoutUser }) => (
  <div>
    <LogoutButton onLogoutClick={() => logoutUser()} />
  </div>
)

export default Sidebar
