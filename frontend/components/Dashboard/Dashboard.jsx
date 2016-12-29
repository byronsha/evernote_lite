import React, { Component } from 'react'
import AddNotebookContainer from './AddNotebookContainer'
import NotebookListContainer from './NotebookListContainer'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <AddNotebookContainer />
        <NotebookListContainer />
      </div>
    )
  }
}

export default Dashboard
