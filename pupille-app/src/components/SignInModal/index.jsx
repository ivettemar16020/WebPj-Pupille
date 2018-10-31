import uuid from 'uuid-v4';
import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import './signInModal.css';

class SignInModal extends Component {
    render() {
        const { onSubmit } = this.props;
        return(
            <div className='container'>
                <h3 className="h3
                ">Crear un usuario</h3>
                <input className="h5"
                    type="text"
                    placeholder="Usuario"
                    ref={ node => { this.userInput = node; } }
                />
                <input className="h5"
                    type="text"
                    placeholder="Correo"
                    ref={ node => { this.mailInput = node; } }
                />
                <input className="h5"
                    type="password"
                    placeholder="Contraseña"
                    ref={ node => { this.passwordInput = node; } }
                />
                <button className="h5"
                    onClick={
                        () => {
                        onSubmit(
                            this.mailInput.value,
                            this.passwordInput.value,
                        );

                        this.mailInput.value = "";
                        this.passwordInput.value = "";
                        this.mailInput.focus();
                        }
                    }
                    >
                    Ingresar
                </button>
            </div>
        )
    }
}

//export default SignInModal

export default connect(
    undefined,
    dispatch => ({
      onSubmit(username,email,password) {
        dispatch(actions.createUser(uuid(), username,email, password));
      }
    })
)(SignInModal);
  