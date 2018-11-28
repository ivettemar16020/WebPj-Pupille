import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Subject from '../Subject';
import * as selectors from '../../reducers';


const SubjectList = ({ subjects = [] , name}) => (
  <Fragment>
    <h1 className="h5">{name}</h1>
    <ul>
      {
        subjects.length > 0
          ? subjects.map(({ id }) => <Subject key={id} id={id} />)
          : <li>No hay ninguna materia</li>
      }
      {console.log(subjects)}

    </ul>
  </Fragment>
);

//export default SubjectList;
export default connect(
    state => ({
      subjects: selectors.getSubjects(state),
    }),
    undefined,
  )(SubjectList);
  