import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import sessions from '../reducers/sessions_reducer';
import notebooks from '../reducers/notebooks_reducer';

const rootReducer = combineReducers({
  sessions,
  notebooks,
  routing: routerReducer
});

const masterMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger({ collapsed: true }),
  routerMiddleware(browserHistory)
);

const store = createStore(
  rootReducer,
  masterMiddleware
);

export default store;
