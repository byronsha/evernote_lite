import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SidebarContainer from './Sidebar/SidebarContainer'
import ListMenu from './ListMenu/ListMenu'
import AddNotebookModal from './Modals/AddNotebookModal'
import DeleteNotebookModal from './Modals/DeleteNotebookModal'

class Home extends Component {
  render() {
    return (
      <div>
        <SidebarContainer />
        <ListMenu />

        {this.props.children}

        <AddNotebookModal />
        <DeleteNotebookModal />
      </div>
    )
  }
}

export default Home
