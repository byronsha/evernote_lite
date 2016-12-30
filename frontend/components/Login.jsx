import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../actions/session'

class Login extends Component {
  render() {
    const { isFetching, errorMessage, loginUser } = this.props
    let username
    let password

    return (
      <div className='container'>
        <form onSubmit={e => {
            e.preventDefault()
            loginUser(({ username: username.value, password: password.value }))
            username.value = ''
            password.value = ''
          }}>
          <h4>Please log in</h4>
          <input
            type='text'
            className="form-control"
            placeholder='Username'
            ref={node => { username = node }}
            />
          <input
            type='password'
            className="form-control"
            placeholder='Password'
            ref={node => { password = node }}
            />
          <button type='submit' className='btn btn-primary'>
            Login
          </button>

          {errorMessage &&
            <p>{errorMessage}</p>
          }
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isFetching: state.session.isFetching,
  errorMessage: state.session.errorMessage
})

const mapDispatchToProps = ({
  loginUser
})

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer
