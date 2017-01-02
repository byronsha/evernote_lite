import React, { Component } from 'react'
import { connect } from 'react-redux'
import NotebookListContainer from './NotebookListContainer'
import NoteListContainer from './NoteListContainer'

class ListMenu extends Component {
  render() {
    if (this.props.listMenu === 'NOTES') {
      return <NoteListContainer />
    } else if (this.props.listMenu === 'NOTEBOOKS') {
      return <NotebookListContainer />
    } else {
      return <div></div>
    }
  }
}

const mapStateToProps = state => ({
  listMenu: state.listMenu
})

export default connect(
  mapStateToProps
)(ListMenu)
