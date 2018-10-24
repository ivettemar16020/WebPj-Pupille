import React, { Component } from 'react';
import './App.css';
import SignInModal from './components/SignInModal';

//https://fontawesome.com/

class App extends Component {
  render() {
    return (
      <div className="App">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous"></link>
        <nav>
          <a className="h5"><i className="fa fa-home"></i> Home</a>
          <a className="h5"><i className="fa fa-folder-plus"></i> New Subject</a>
          <a className="h5"><i className="fa fa-search"></i> Search</a>
          <a className="h5"><i className="fa fa-sign-out-alt"></i> Log Out</a>
        </nav>
        <div className="Content">
          <div className="content-wrapper">
            <SignInModal/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
