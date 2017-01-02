import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SidebarContainer from './Sidebar/SidebarContainer'
import ListMenuContainer from './ListMenu/ListMenuContainer'
import NoteContainer from './Note/NoteContainer'
import NotebookModal from './NotebookModal/NotebookModal'

class Home extends Component {
  render() {
    return (
      <div>
        <SidebarContainer />
        <ListMenuContainer />
        <NoteContainer />

        <NotebookModal />
      </div>
    )
  }
}

export default Home
