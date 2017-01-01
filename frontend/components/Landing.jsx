import React from 'react'
import { Link } from 'react-router'

class Landing extends React.Component {
  render() {
    return (
      <div>
        <h1>Home Page</h1>
        <Link to='/login'>Login </Link>
        <Link to='/signup'>Sign Up</Link>
      </div>
    )
  }
}

export default Landing
