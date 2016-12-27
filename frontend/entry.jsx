import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import Store from './store/store';
import App from './components/App';
import HomePage from './components/HomePage/HomePage';
import Dashboard from './components/Dashboard/Dashboard';

const history = syncHistoryWithStore(browserHistory, Store);

const preventIfLoggedIn = () => {

}

const requireLogin = () => {

}

const Root = () => (
  <Provider store={Store}>
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
