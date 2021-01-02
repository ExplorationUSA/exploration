import React, { Component } from 'react';
import { withRouter, Redirect, Route } from 'react-router-dom';
import { useAuth } from './useAuth';

import TimeHomePage from './containers/time/TimeHomePage';
import Login from './containers/LoginPage';

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  let auth = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.user.isAuthenticated === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Login />
        )
      }
    />
  );
};

export default withRouter(PrivateRoute);
