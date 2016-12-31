import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { loginUser } from '../actions/session'

class Login extends Component {
  render() {
    const { isFetching, errorMessage, loginUser } = this.props
    let username
    let password

    return (
      <div className='login-container'>
        <div className='ui card fluid'>
          <div className='content'>
            <h2>Log in</h2>
          </div>

          <div className='content'>
            <form
              className='ui big form error'
              onSubmit={e => {
                e.preventDefault()
                loginUser(({
                  username: username.value,
                  password: password.value
                }))
                username.value = ''
                password.value = ''
            }}>
              <div className='field'>
                <label>Username</label>
                <input
                  type='text'
                  ref={input => { username = input }}
                />
              </div>
              <div className='field'>
                <label>Password</label>
                <input
                  type='password'
                  ref={input => { password = input }}
                />
              </div>
              <div className='field'>
                <button type='submit' className='ui big button fluid green'>
                  Log in
                </button>
              </div>

              {errorMessage &&
                <div className='ui error message'><p>{errorMessage}</p></div>
              }
            </form>
          </div>
        </div>

        <div className='align-center'>
          <Link to='/signup'>Don't have an account? Sign up.</Link>
        </div>
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
