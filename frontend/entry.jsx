import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, push } from 'react-router-redux'

import store from './store/store'
import { fetchNotebooks } from './actions/notebooks'

import App from './components/App'
import Login from './components/Login'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage/HomePage'
import Dashboard from './components/Dashboard/Dashboard'

const history = syncHistoryWithStore(browserHistory, store)

const preventIfLoggedIn = () => {
  if (store.getState().session.isAuthenticated) {
    store.dispatch(push('/dashboard'))
  }
}

const requireLogin = () => {
  if (!store.getState().session.isAuthenticated) {
    store.dispatch(push('/'))
    return
  }
  store.dispatch(fetchNotebooks(store.getState().session.user.id))
}

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route name='login' path='/login' component={Login} />
      <Route name='signup' path='/signup' component={SignUp} />

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
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  )
})
