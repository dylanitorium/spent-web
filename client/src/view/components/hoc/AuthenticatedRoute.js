import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { routes } from 'spent/view/routes';

const AuthenticatedRoute = props => {
  const { component: Component, authenticated,  ...passProps } = props;

  return (
    <Route
      {...passProps}
      render={props =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: routes.UNAUTHENTICATED,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
};

AuthenticatedRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default AuthenticatedRoute;



