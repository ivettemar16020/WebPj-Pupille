import uuid from 'uuid-v4';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import NewCard from '../../components/NewCard/index';

class NewTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      list: [],
      text: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
    console.log("he sido tocado");
  };

  handleSubmit(e) {
    console.log("botoncin");
    e.preventDefault();
    this.setState(prevState => ({
      list: prevState.list.concat(this.state.text),
      text: ''
    }))
    
  }

   render() {
    const { onSubmit } = this.props;
    return (
      <Fragment>
        <input
            type="text"
            placeholder="Nombre del tema"
            onChange={this.handleNameChange}
            ref={ node => { this.nameInput = node; } }
        />
        <input
            type="number"
            placeholder="Numero de tarjetas"
            ref={ node => { this.numberInput = node; } }
        />
        
        <button
          onClick={
            () => {
              onSubmit(
                this.handleSubmit,
                console.log("agregado"),
              );
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
                console.log("tema creado"),
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
