import React, { Component } from 'react';
import NewSubject from '../../components/NewSubject/index';
import SubjectList from '../../components/SubjectList/index';

class Home extends Component {
  render() {
    return (
      <div >
        <div>
          <h1>Home</h1>
        </div>
        <NewSubject/>
        <SubjectList></SubjectList>
      </div>
    );
  }
}

export default Home;