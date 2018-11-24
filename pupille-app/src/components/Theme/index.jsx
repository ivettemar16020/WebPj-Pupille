import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Card from '../Card';
import * as selectors from '../../reducers';


const Theme = ({ cards = [] }) => (
  <Fragment>
    <h1 className="h5">{name}</h1>
    <ul>
      {
        cards.length > 0
          ? cards.map(({ id }) => <Card key={id} id={id} />)
          : <li>No hay !</li>
      }
    </ul>
  </Fragment>
);

export default Theme;