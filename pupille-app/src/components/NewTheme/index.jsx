import uuid from 'uuid-v4';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
//import NewCard from '../../components/NewCard/index';

class NewTheme extends React.Component {
  render() {
    const { onSubmit } = this.props;

    return (
      <Fragment>
        <input
            type="text"
            placeholder="Nombre del tema"
            ref={ node => { this.nameInput = node; } }
        />
        Tarjeta
        Tarjeta
        Tarjeta
        <button
          onClick={
            () => {
              onSubmit(
                this.nameInput.value,
              );

              this.nameInput.value = "";
            }
          }
        >
        Agregar
        </button>
        <button
          onClick={
            () => {
              onSubmit(
                this.nameInput.value,
              );

              this.nameInput.value = "";
            }
          }
        >
        Crear tema
        </button>
      </Fragment>
    );
  }
};

export default connect(
  undefined,
  dispatch => ({
    onSubmit(name) {
      dispatch(actions.createTheme(uuid(), name));
    }
  })
)(NewTheme);
