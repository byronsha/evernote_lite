import React, { PropTypes } from 'react'
import NotebookHeader from './NotebookHeader'
import Notebook from './Notebook'
import AddNotebookContainer from './AddNotebookContainer'

const NotebookList = ({ notebooks, isFetching, deleteNotebook }) => (
  <div className='list-menu'>
    <NotebookHeader />
    <div className='ui relaxed divided list large'>
      {notebooks.map(notebook =>
        <Notebook
          key={notebook.id}
          {...notebook}
          deleteNotebook={() => deleteNotebook(notebook.id)}
          />
      )}
    </div>
    <AddNotebookContainer />
  </div>
)

NotebookList.propTypes = {
  notebooks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired).isRequired,
  isFetching: PropTypes.bool.isRequired,
  deleteNotebook: PropTypes.func.isRequired
}

export default NotebookList
