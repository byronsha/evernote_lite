import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar/Navbar';

class App extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage, user } = this.props;

    return (
      <div>
        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
          user={user}
        />

        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
  errorMessage: state.session.errorMessage,
  user: state.session.user
});

export default connect(mapStateToProps)(App);
