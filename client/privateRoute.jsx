import React, { Component } from 'react';
import { withRouter, Redirect, Route } from 'react-router-dom';
import { useAuth } from './useAuth';

import TimeHomePage from './containers/time/TimeHomePage';
import Login from './containers/LoginPage';


const PrivateRoute = ({ component: Component, location, ...rest }) => {
  let auth = useAuth();
 
  console.log('authenticated user', auth.user);

  // return (!auth.user.isAuthenticated) ? <Login /> : <TimeHomePage {...rest} />
  return (<Route {...rest} render={(props) => (
    auth.user.isAuthenticated === true
    ? <Component {...props} {...rest} />
    : <Login />
)} />)
};

//Component {...rest} 
//
export default withRouter(PrivateRoute);