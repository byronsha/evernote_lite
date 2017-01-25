import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SidebarContainer from './Sidebar/SidebarContainer'
import NoteListContainer from './NoteList/NoteListContainer'
import NotebookListContainer from './NotebookList/NotebookListContainer'
import DeleteNoteModal from './Modals/DeleteNoteModal'
import AddNotebookModal from './Modals/AddNotebookModal'
import DeleteNotebookModal from './Modals/DeleteNotebookModal'
import Dimmer from './Modals/Dimmer'

class Home extends Component {
  render() {
    return (
      <div>
        <SidebarContainer />
        <NoteListContainer />
        <NotebookListContainer />

        {this.props.children}

        <DeleteNoteModal />
        <AddNotebookModal />
        <DeleteNotebookModal />
        <Dimmer />
      </div>
    )
  }
}

export default Home
