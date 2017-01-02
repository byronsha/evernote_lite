import React, { PropTypes } from 'react'
import NotebookHeader from './NotebookHeader'
import Notebook from './Notebook'

const NotebookList = ({
  notebooks,
  isFetching,
  deleteNotebook,
  showNotebookModal
}) => (
  <div className='list-menu'>
    <NotebookHeader
      notebooks={notebooks}
      showNotebookModal={showNotebookModal}
    />

    <div className='notebook-list'>
      {notebooks.map(notebook =>
        <Notebook
          key={notebook.id}
          {...notebook}
          deleteNotebook={() => deleteNotebook(notebook.id)}
          />
      )}
    </div>
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
