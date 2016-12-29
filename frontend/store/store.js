import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import SessionsReducer from '../reducers/sessions_reducer';

const RootReducer = combineReducers({
  sessions: SessionsReducer,
  routing: routerReducer
});

const MasterMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger(),
  routerMiddleware(browserHistory)
);

const store = createStore(
  RootReducer,
  MasterMiddleware
);

export default store;
