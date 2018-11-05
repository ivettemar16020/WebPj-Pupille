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
import LogInModal from './components/LogInModal';
import Study from './pages/Study';
import SignInModal from './components/SignInModal';


const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous"></link>
          <div className="Container">
            <ul>
              <li><Link className="h5" to="/home"><i className="fa fa-home"></i> Inicio</Link></li>
              <li><Link className="h5" to="/signin"><i className="fa fa-sign-in-alt"></i> Sign In</Link></li>
              <li><Link className="h5" to="/login"><i className="fa fa-sign-out-alt"></i> Log In</Link></li>
              <li><Link className="h5" to="/createtheme"><i className="fa fa-folder-plus"></i> Crear un tema</Link></li>
              <li><Link className="h5" to="/study"><i className="fa fa-book-reader"></i> Estudiar</Link></li>
            </ul>
            <hr/>
            <Route path="/home" component={Home} />
            <Route path="/signin" component={SignInModal} />
            <Route path="/createtheme" component={CreateTheme} />
            <Route path="/login" component={LogInModal} />
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