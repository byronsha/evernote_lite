import React, { Component } from 'react'
import { connect } from 'react-redux'
import NotebookListContainer from '../NotebookList/NotebookListContainer'
import NoteListContainer from '../NoteList/NoteListContainer'

class ListMenu extends Component {
  render() {
    const listMenu = this.props.listMenu

    if (listMenu === 'NOTES') {
      return <NoteListContainer />
    } else if (listMenu === 'NOTEBOOKS') {
      return <NotebookListContainer />
    }
  }
}

function mapStateToProps(state) {
  return {
    listMenu: state.listMenu
  }
}

export default connect(
  mapStateToProps
)(ListMenu)
