import uuid from 'uuid-v4';
import Fragment from 'react';

import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import React from 'react'


const Card = ({question,answer}) => {
    return (
      <Fragment>
        <div className="card">
          <div className="card-body">{question}</div>
          <div className="card-body">{answer}</div>
          
        </div> 
      </Fragment>
    );
}

export default Card;


/*import React, { Component } from 'react';
import Fragment from 'react';


const Card = ({
  id,
  question,
  answer,
}) => (
  <Fragment>
    <div className="col-md-4"> 
      <div className="card mt-4">
        <div className="card-header">
          <h3>holiwi</h3>
          <span className="badge badge-pill badge-danger ml"></span>
        </div>
      </div>
    </div>
  </Fragment>
);


export default Card;
*/