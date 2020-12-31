import React from 'react';

import { Route, Switch } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import HomePage from './containers/HomePage';
import TimeHomePage from './containers/time/TimeHomePage';
import PrivateRoute from './privateRoute';
import NotFound from './containers/404';
// import ResetPasswordPage from './containers/ResetPasswordPage';
import TripPage from './containers/time/TripPage';
import ActivityList from './containers/time/Activities/ActivityList';

const App = (props) => (
  <div id="app" className="main-container">
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={SignupPage} />
      {/* <Route path="/resetpassword" exact component={ResetPasswordPage} /> */}
      <PrivateRoute path="/time/home" exact component={TimeHomePage} />
      <PrivateRoute path="/time/trip" exact component={TripPage} />
      <PrivateRoute path="/time/trip/:tripId" exact component={ActivityList} />
       {/* <PrivateRoute path="/time/activitylist" exact component={ActivityList} /> */}
      <Route path="*" component={NotFound} />
    </Switch>
  </div>
);

export default App;
