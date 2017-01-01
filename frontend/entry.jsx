import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, push } from 'react-router-redux'

import store from './store/store'
import { fetchNotebooks } from './actions/notebooks'

import Landing from './components/Landing'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Home from './components/Home'

const history = syncHistoryWithStore(browserHistory, store)

const preventIfLoggedIn = () => {
  if (store.getState().session.isAuthenticated) {
    store.dispatch(push('/home'))
  }
}

const requireLogin = () => {
  if (!store.getState().session.isAuthenticated) {
    store.dispatch(push('/login'))
    return
  }
  store.dispatch(fetchNotebooks(store.getState().session.user.id))
}

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route name='landing' path='/' component={Landing} onEnter={preventIfLoggedIn} />
      <Route name='login' path='/login' component={Login} onEnter={preventIfLoggedIn} />
      <Route name='signup' path='/signup' component={SignUp} onEnter={preventIfLoggedIn} />
      <Route name='home' path='/home' component={Home} onEnter={requireLogin} />
    </Router>
  </Provider>
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  )
})
