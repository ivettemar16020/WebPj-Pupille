import React from 'react';
import './newTheme.css';

const AddTheme = props => (
  <div style={{ padding: '5px', marginTop: '5px' }}>
    <form className="MyForm" onSubmit={props.handleSubmit}>
      <input
        type="text"
        name="addchisme"
        placeholder="titulo"
        onChange={props.handleChange}
        value={props.value}
      />
      <button className="btn btn-info" type="submit">Agregar tema</button>
    </form>
  </div>
);

export default AddTheme;