import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import configureStore from './configureStore';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

import CreateTheme from './pages/CreateTheme';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Study from './pages/Study';
import SignInModal from './components/SignInModal';


const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <div className="Container">
            <ul>
              <li><Link className="h5" to="/signin">Sign In</Link></li>
              <li><Link className="h5" to="/createtheme">Create Theme</Link></li>
              <li><Link className="h5" to="/home">Home</Link></li>
              <li><Link className="h5" to="/login">Log In</Link></li>
              <li><Link className="h5" to="/study">Study</Link></li>
            </ul>
            <hr/>
            <Route path="/signin" component={SignInModal} />
            <Route path="/createtheme" component={CreateTheme} />
            <Route exact={true} path="/" component={Home} />
            <Route path="/login" component={LogIn} />
            <Route path="/study" component={Study} />

          </div>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;

/*import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';
import SignUp from './pages/SignUp';
import configureStore from './configureStore';

//https://fontawesome.com/

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
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
              <SignUp/>
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
*/