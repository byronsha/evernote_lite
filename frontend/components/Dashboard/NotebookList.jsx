import React, { PropTypes } from 'react'
import Notebook from './Notebook'

const NotebookList = ({ notebooks, isFetching, deleteNotebook }) => (
  <ul>
    {notebooks.map(notebook =>
      <Notebook
        key={notebook.id}
        {...notebook}
        deleteNotebook={() => deleteNotebook(notebook.id)}
      />
    )}
  </ul>
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
