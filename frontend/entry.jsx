import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, push } from 'react-router-redux';

import store from './store/store';
import App from './components/App';
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';

const history = syncHistoryWithStore(browserHistory, store);

const preventIfLoggedIn = () => {
  if (store.getState().sessions.isAuthenticated) {
    store.dispatch(push('/dashboard'));
  }
}

const requireLogin = () => {
  if (!store.getState().sessions.isAuthenticated) {
    store.dispatch(push('/'));
  }
}

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route name='app' path='/' component={App}>
        <IndexRoute component={HomePage} onEnter={preventIfLoggedIn} />
        <Route
          name='dashboard'
          path='dashboard'
          component={Dashboard}
          onEnter={requireLogin}
        />

      </Route>
    </Router>
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  );
});
