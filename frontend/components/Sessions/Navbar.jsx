import React, { Component, PropTypes } from 'react';
import Login from './Login';
import Logout from './Logout';
import { loginUser, logoutUser } from '../../actions/session_actions';

class Navbar extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;

    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="#">Evernote Lite</a>
          <div className='navbar-form'>

            {!isAuthenticated &&
              <Login
                errorMessage={errorMessage}
                onLoginClick={creds => dispatch(loginUser(creds))}
              />
            }

            {isAuthenticated &&
              <Logout
                onLogoutClick={() => dispatch(logoutUser())}
              />
            }

          </div>
        </div>
      </nav>
    )
  }
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

export default Navbar;
