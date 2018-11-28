import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Theme from '../Theme';
import * as selectors from '../../reducers';


const Subject = ({ themes = [] , name}) => (
  <Fragment>
    <h1 className="h5">{name}</h1>
    <ul>
      {
        themes.length > 0
          ? themes.map(({ id }) => <Theme key={id} id={id} />)
          : <li>No tienes ninguna materia</li>
      }
    </ul>
  </Fragment>
);

//export default Subject;
export default connect(
  state => ({
    themes: selectors.getThemes(state),
  }),
  undefined,
)(Subject);
