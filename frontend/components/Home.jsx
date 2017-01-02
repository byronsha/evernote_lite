import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SidebarContainer from './Sidebar/SidebarContainer'
import ListMenu from './ListMenu/ListMenu'
import NoteEditorContainer from './NoteEditor/NoteEditorContainer'
import AddNotebookModal from './NotebookList/AddNotebookModal'

class Home extends Component {
  render() {
    return (
      <div>
        <SidebarContainer />
        <ListMenu />
        <NoteEditorContainer />

        <AddNotebookModal />
      </div>
    )
  }
}

export default Home
