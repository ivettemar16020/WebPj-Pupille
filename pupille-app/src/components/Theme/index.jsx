import React, { Fragment } from 'react';
import { connect } from 'react-redux';


const Theme = props => (
  <div className="card">
    <ul className="card-body" applied={props.applied}>
      <div className="card-header"> {props.title} </div>
      <div> {props.content} </div>
      <div className="btn btn-danger btn-sm" onClick={props.removeTheme}>✘</div>
    </ul>
  </div>
);

export default Theme;