import uuid from 'uuid-v4';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';


class NewSubject extends React.Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <Fragment>
        <input
            type="text"
            placeholder="Nombre de la materia"
            ref={ node => { this.nameInput = node; } }
        />
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
        Crear
        </button>
      </Fragment>
    );
  }
};

export default connect(
  undefined,
  dispatch => ({
    onSubmit(name) {
      dispatch(actions.createSubject(uuid(), name));
    }
  })
)(NewSubject);
