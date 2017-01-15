import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import NotebookHeader from './NotebookHeader'
import Notebook from './Notebook'

function NotebookList({
  notebooks,
  isFetching,
  isPanelShowing,
  showAddNotebookModal,
  showDeleteNotebookModal,
  hideNotebookList,
  setActiveNotebook
}) {
  if (!isPanelShowing) {
    return (
      <ReactCSSTransitionGroup
        transitionName='notebook-list-animation'
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        <div key='leave'></div>
      </ReactCSSTransitionGroup>
    )
  }

  return (
    <ReactCSSTransitionGroup
      transitionName='notebook-list-animation'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      <div key='enter' id='notebook-list-container'>
        <NotebookHeader
          notebooks={notebooks}
          showAddNotebookModal={showAddNotebookModal}
          />

        <div className='notebook-list'>
          <div
            className='notebook'
            onClick={() => {
              setActiveNotebook(null)
              hideNotebookList()
            }}>
            <span>All Notes</span>
          </div>
          {notebooks.map(notebook =>
            <Notebook
              key={notebook.id}
              notebook={notebook}
              showDeleteNotebookModal={showDeleteNotebookModal}
              hideNotebookList={hideNotebookList}
              setActiveNotebook={setActiveNotebook}
              />
          )}
        </div>
      </div>
    </ReactCSSTransitionGroup>
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
