import React, { Component } from 'react'
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
      <div className='container'>        
        <form onSubmit={e => {
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
          <input
            type='text'
            className="form-control"
            placeholder='username'
            ref={node => { username = node }}
            />
          <input
            type='text'
            className="form-control"
            placeholder='email'
            ref={node => { email = node }}
            />
          <input
            type='text'
            className="form-control"
            placeholder='name'
            ref={node => { name = node }}
            />
          <input
            type='password'
            className="form-control"
            placeholder='password'
            ref={node => { password = node }}
            />
          <button type='submit' className='btn btn-primary'>
            Sign Up
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
  signUpUser
})

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)

export default SignUpContainer
