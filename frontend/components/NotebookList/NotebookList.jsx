import React, { PropTypes } from 'react'
import NotebookHeader from './NotebookHeader'
import Notebook from './Notebook'

function NotebookList({
  notebooks,
  isFetching,
  showAddNotebookModal,
  showDeleteNotebookModal
}) {
  return (
    <div className='list-menu'>
      <NotebookHeader
        notebooks={notebooks}
        showAddNotebookModal={showAddNotebookModal}
      />
    
      <div className='notebook-list'>
        {notebooks.map(notebook =>
          <Notebook
            key={notebook.id}
            notebook={notebook}
            showDeleteNotebookModal={showDeleteNotebookModal}
          />
        )}
      </div>
    </div>
  )
}

NotebookList.propTypes = {
  notebooks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  }).isRequired).isRequired,
  isFetching: PropTypes.bool.isRequired,
  showAddNotebookModal: PropTypes.func.isRequired,
  showDeleteNotebookModal: PropTypes.func.isRequired
}

export default NotebookList
