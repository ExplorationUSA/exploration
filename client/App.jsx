import React, { Component } from 'react';
const axios = require('axios');


import { Route, Switch } from 'react-router-dom';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import HomePage from './containers/HomePage';
import TimeHomePage from './containers/timeHomePage/TimeHomePage';
import TripPage from './containers/tripPage/aTripPage';
import PrivateRoute from './privateRoute';
import NotFound from './containers/404';
// import ResetPasswordPage from './containers/ResetPasswordPage';

import {
  Button,
} from '@chakra-ui/react';

class App extends Component { 

  state = {};

  fetchYelp = (location, categories) => {
    console.log('in the fetch')
    fetch('/api/yelp/' + location, {
      method: "GET",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
      console.error('Error:', error);
    })  
  }
  



  render() {

  return(
  <div id="app" className="main-container">
    <Switch>
      {/* <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={SignupPage} />  */}
      {/* <Route path="/resetpassword" exact component={ResetPasswordPage} /> */}
      {/* <Route path="/" exact component={TimeHomePage} /> */}
      <Route path="/" exact component={TripPage} />
      <Route path="*" component={NotFound} />
    </Switch>
    <Button onClick ={this.fetchYelp('New York')}> fetch Yelp</Button>
  </div>
  )
    };
  }

export default App;
