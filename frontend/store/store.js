import { createStore, combineReducers, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import session from '../reducers/session'
import notes from '../reducers/notes'
import notebooks from '../reducers/notebooks'
import deleteNoteModal from '../reducers/deleteNoteModal'
import addNotebookModal from '../reducers/addNotebookModal'
import deleteNotebookModal from '../reducers/deleteNotebookModal'
import activeNotebook from '../reducers/activeNotebook'

const rootReducer = combineReducers({
  session,
  notes,
  notebooks,
  deleteNoteModal,
  addNotebookModal,
  deleteNotebookModal,
  activeNotebook,
  routing: routerReducer
})

const masterMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
  routerMiddleware(browserHistory)
)

const store = createStore(
  rootReducer,
  masterMiddleware
)

export default store
