import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { signUpUser } from '../actions/session'

class SignUp extends Component {
  render() {
    const { isFetching, errorMessage, signUpUser } = this.props
    let username
    let email
    let name
    let password

    return (
      <div className='login-container'>
        <div className='ui card fluid'>
          <div className='content'>
            <h2>Sign up</h2>
          </div>

          <div className='content'>
            <form
              className='ui big form error'
              onSubmit={e => {
                e.preventDefault()
                signUpUser(({
                  username: username.value,
                  email: email.value,
                  name: name.value,
                  password: password.value
                }))
                username.value = ''
                email.value = ''
                name.value = ''
                password.value = ''
            }}>
              <div className='field'>
                <label>Username</label>
                <input
                  type='text'
                  ref={ref => { username = ref }}
                />
              </div>
              <div className='field'>
                <label>Email</label>
                <input
                  type='text'
                  ref={ref => { email = ref }}
                />
              </div>
              <div className='field'>
                <label>Name</label>
                <input
                  type='text'
                  ref={ref => { name = ref }}
                  />
              </div>
              <div className='field'>
                <label>Password</label>
                <input
                  type='password'
                  ref={ref => { password = ref }}
                />
              </div>
              <div className='field'>
                <button type='submit' className='ui big button fluid green'>
                  Sign up
                </button>
              </div>

              {errorMessage &&
                <div className='ui error message'>
                  <p>{errorMessage}</p>
                </div>
              }
            </form>
          </div>
        </div>

        <div className='align-center'>
          <Link to='/login'>Already have an account? Log in.</Link>
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
  signUpUser
})

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)

export default SignUpContainer
