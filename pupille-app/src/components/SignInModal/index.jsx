import { Field, reduxForm } from 'redux-form'
import React, {Component} from 'react'

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

class SignInModal extends Component {
  render() {
    const { handleSubmit } = this.props; 
    return (
      <form >
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
          validate={[required,password]}
        />
        <div>
          <button type="submit">Crear</button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'signInModal' 
})(SignInModal)