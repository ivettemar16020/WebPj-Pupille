import { Field, reduxForm } from 'redux-form';
import React, {Component} from 'react';
import * as actions from '../../actions/index';
import './signInModal.css';


const required = value => value ? undefined : 'Este campo es obligatorio'
const emailCheck = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Dirección de correo inválida' : undefined
const passwordCheck = value =>
  value && !/^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6}$/i.test(value) ?
    'Contraseña insegura' : undefined
    

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="element">
    <label>{label}</label>
    <input {...input} placeholder={label} type={type}/>
    {touched && ((error && <div className="MyError">{error}</div>) || (warning && <div className="MyWarning">{warning}</div>))}
  </div>
)

const SignInModal = ({ handleSubmit }) => (
  <div className="card">
    <form onSubmit={handleSubmit} className="card-body">
    <h4 class="card-title">Crear una cuenta</h4>
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
        validate={[required,emailCheck]}
      />
      <Field 
        name="pw" 
        type="password"
        id = "password"
        component={renderField} 
        label="Password"
        validate={required}
        warning={passwordCheck}
      />
      <div>
        <button className="btn btn-info btn-lg" type="submit">Crear</button>
      </div>
    </form>
  </div>
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