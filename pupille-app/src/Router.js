import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom';
import CreateTheme from './pages/CreateTheme';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Study from './pages/Study';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/CreateTheme' component={CreateTheme} />
      <Route exact path='/Home' component={Home} />
      <Route exact path='/LogIn' component={LogIn} />
      <Route exact path='/SignUp' component={SignUp} />
      <Route exact path='/Study' component={Study} />
    </Switch>
  </BrowserRouter>
);

export default Router;