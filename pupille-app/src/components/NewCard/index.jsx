import uuid from 'uuid-v4';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';


class NewCard extends React.Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <Fragment>
        <input
            type="text"
            placeholder="Pregunta"
            ref={ node => { this.questionInput = node; } }
        />
        <input
            type="text"
            placeholder="Respuesta"
            ref={ node => { this.answerInput = node; } }
        />

        <button
          onClick={
            () => {
              onSubmit(
                this.questionInput.value,
                this.answerInput.value,
              );

              this.questionInput.value = "";
              this.answerInput.value = "";
              this.questionInput.focus();
            }
          }
        >
        Agregar
        </button>
      </Fragment>
    );
  }
};

export default connect(
  undefined,
  dispatch => ({
    onSubmit(question, answer) {
      dispatch(actions.createCard(uuid(), question, answer));
    }
  })
)(NewCard);
