import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SidebarContainer from './Sidebar/SidebarContainer'
import ListMenuContainer from './ListMenu/ListMenuContainer'
import NoteContainer from './Note/NoteContainer'

class Home extends Component {
  render() {
    return (
      <div>
        <SidebarContainer />
        <ListMenuContainer />
        <NoteContainer />
      </div>
    )
  }
}

export default Home
