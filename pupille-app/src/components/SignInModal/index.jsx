import { Field, reduxForm } from 'redux-form';
import React, {Component} from 'react';
import * as actions from '../../actions/index';

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
        {touched && ((error && <div>{error}</div>) || (warning && <div>{warning}</div>))}
        </div>
    </div>
    )

const SignInModal = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field 
      name="username" 
      type="text"
      id = "username"
      component={renderField} 
      label="Username"
      validate={required}
    />
    <Field 
      name="email" 
      type="email"
      id = "email"
      component={renderField} 
      label="Email"
      validate={email}
    />
    <Field 
      name="pw" 
      type="password"
      id = "password"
      component={renderField} label="Password"
      validate={[required]}
    />
    <div>
      <button type="submit">Crear</button>
    </div>
  </form>
)

export default reduxForm({
  form: 'SignInModal',
  onSubmit(values, dispatch) {
    dispatch(actions.createUser(
      values.email,
      values.password,
      values.username,
    )); 
  }
})(SignInModal);