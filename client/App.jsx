import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import HomePage from './containers/HomePage';
import TimeHomePage from './containers/time/TimeHomePage';
// import ResetPasswordPage from './containers/ResetPasswordPage';

const App = () => (
  <div id="app" className="main-container">
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={SignupPage} />
      {/* <Route path="/resetpassword" exact component={ResetPasswordPage} /> */}
      <Route path="/time/home" exact component={TimeHomePage} />
    </Switch>
  </div>
);

export default App;
