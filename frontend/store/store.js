import { createStore, combineReducers, applyMiddleware } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

import session from '../reducers/session'
import notes from '../reducers/notes'
import notebooks from '../reducers/notebooks'
import listMenu from '../reducers/listMenu'
import notebookModal from '../reducers/notebookModal'

const rootReducer = combineReducers({
  session,
  notes,
  notebooks,
  listMenu,
  notebookModal,
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
