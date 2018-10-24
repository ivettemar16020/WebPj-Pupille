import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Card from '../Card';


const CardList = ({ cards = [] }) => (
  <Fragment>
    <ul>
      {
        cards.length > 0
          ? cards.map(({ id }) => <Card key={id} id={id} />)
          : <li>No hay !</li>
      }
    </ul>
  </Fragment>
);

export default CardList;
