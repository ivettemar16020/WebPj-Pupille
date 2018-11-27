import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignInModal from './components/SignInModal/index.js';
import * as actions from '../../../actions'
import { connect } from "react-redux";
import { compose } from 'recompose';
import {Route, Redirect} from 'react-router-dom'
import * as routes from '../../../routes'
import { getUser } from '../../../reducers'

class SignInApp extends Component {
  render() {
    const { login, auth } = this.props
    console.log(this.props);
    console.log("entrando");
    
    return (
      !auth ?
      <div >
        <div>
          <h1>Sign In</h1>
        </div>
        <SignInModal
          onSubmit={values => login(values)}
        />
      </div>:
      <Redirect to={routes.LANDING} />
    );
  }
}

export default compose(
  withRouter,
  connect(
    state => ({
      auth: getUser(state).token,
    }),
    ( dispatch ) => ({
      login(values) {
        dispatch(actions.createUser(values.username, values.password, values.email));
        this.props.history.push(routes.SIGNIN)
      }
    })
  )
)(SignInApp)

export {
  SignInModal,
};