import uuid from 'uuid-v4';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import React from 'react'

const required = value => value ? undefined : 'Este campo es obligatorio'
const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Dirección de correo inválida' : undefined
const password = value =>
  value && !/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}$/i.test(value) ?
    'Contraseña insegura' : undefined
    

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
        validate={required}
      />
      <Field name="email" type="email"
        component={renderField} label="Email"
        validate={email}
      />
      <Field name="pw" type="password"
        component={renderField} label="Password"
        validate={[required,password]}
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