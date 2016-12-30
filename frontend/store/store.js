import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import session from '../reducers/session';
import notebooks from '../reducers/notebooks';

const rootReducer = combineReducers({
  session,
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
