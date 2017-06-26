import React from 'react'
import AuthForm from './AuthForm'
import LoginMutation from '../mutations/Login'
import { graphql } from 'react-apollo'

class LoginForm extends React.Component {
  onSubmit ({ email, password }) {
    this.props.mutate({
      variables: {
        email,
        password
      }
    })
  }
  render () {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

export default graphql(LoginMutation)(LoginForm)
