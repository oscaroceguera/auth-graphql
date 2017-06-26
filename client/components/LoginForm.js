import React from 'react'
import AuthForm from './AuthForm'
import LoginMutation from '../mutations/Login'
import { graphql } from 'react-apollo'
import query from '../queries/CurrentUser'

class LoginForm extends React.Component {
  onSubmit ({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(res => {
      const errors = res.graphQLErrors.map( error => error.message)
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

export default graphql(LoginMutation)(
  graphql(query)(LoginForm)
)
