import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { loginUser } from '../actions/sessions_actions';
import Navbar from './Sessions/Navbar';

class App extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;

    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />

        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.sessions.isAuthenticated,
    errorMessage: state.sessions.errorMessage
});

export default connect(mapStateToProps)(App);
