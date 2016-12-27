import { createStore, combineReducers, applyMiddleware } from 'redux';
import SessionsReducer from '../reducers/sessions_reducer';
import SessionsMiddleware from '../middleware/sessions_middleware';

const RootReducer = combineReducers({
  session: SessionsReducer
});

const MasterMiddleware = applyMiddleware(SessionsMiddleware);

const Store = createStore(
  RootReducer,
  MasterMiddleware
);

export default Store;
