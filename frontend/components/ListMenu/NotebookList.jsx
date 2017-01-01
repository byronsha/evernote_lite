import React, { PropTypes } from 'react'
import NotebookHeader from './NotebookHeader'
import Notebook from './Notebook'
import AddNotebook from './AddNotebook'

const NotebookList = ({ notebooks, isFetching, deleteNotebook }) => (
  <div className='list-menu'>
    <NotebookHeader notebooks={notebooks} />
    <div className='notebook-list'>
      {notebooks.map(notebook =>
        <Notebook
          key={notebook.id}
          {...notebook}
          deleteNotebook={() => deleteNotebook(notebook.id)}
          />
      )}
    </div>
    <AddNotebook />
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
