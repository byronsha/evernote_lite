import React, { Component, PropTypes } from 'react'

class Logout extends Component {
  render() {
    const { user, onLogoutClick } = this.props;

    return (
      <div>
        {user.name}
        <button onClick={() => onLogoutClick()} className="btn btn-primary">
          Logout
        </button>
      </div>
    )
  }
}

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
}

export default Logout;
