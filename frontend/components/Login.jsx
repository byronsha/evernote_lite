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
        <div className='card-panel'>
          <form onSubmit={e => {
            e.preventDefault()
            loginUser(({ username: username.value, password: password.value }))
            username.value = ''
            password.value = ''
          }}>

            <div className='row'>
              <div className='input-field col s12'>
                <input
                  type='text'
                  id='username'
                  className="validate"
                  ref={node => { username = node }}
                  />
                <label htmlFor="username">Username</label>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input
                  type='password'
                  id='username'
                  className="validate"
                  ref={node => { password = node }}
                  />
                <label htmlFor="password">Password</label>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <button type='submit' className='btn blue col s12'>
                  Log in
                </button>
              </div>
            </div>

            {errorMessage &&
              <div className='row'>
                <div className='col s12'>
                  <p className='red-text'>{errorMessage}</p>
                </div>
              </div>
            }
          </form>
        </div>

        <Link to='/signup'>Don't have an account?</Link>
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
