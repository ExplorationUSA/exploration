import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './useAuth';

const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();

  console.log('authenticated user', auth.user);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              // state: { from: location }
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;