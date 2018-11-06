import uuid from 'uuid-v4';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import React from 'react'


const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label>{label}</label>
        <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
    )

const SignInForm = (props) => {
  const { handleSubmit, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text"
        component={renderField} label="Username"
      />
      <Field name="email" type="email"
        component={renderField} label="Email"
      />
      <Field name="pw" type="password"
        component={renderField} label="Password"
      />
      <div>
        <button type="submit" disabled={submitting}>Crear</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signInForm' 
})(SignInForm)