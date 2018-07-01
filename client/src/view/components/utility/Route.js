import React from 'react';
import PropTypes from 'prop-types';
import { Route as BaseRoute, Redirect } from 'react-router-dom';
import { UNAUTHENTICATED } from 'spent/view/routes';

const Route = (props) => {
  const { component: Component, isAuthenticated, requiresAuth, ...passProps } = props;

  return (
    <BaseRoute
      {...passProps}
      render={(props) => {
        if (!requiresAuth || isAuthenticated) {
          return <Component {...props} />;
        }

        return (
          <Redirect
            to={{
              pathname: UNAUTHENTICATED,
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
};

Route.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  requiresAuth: PropTypes.bool,
};

Route.defaultProps = {
  requiresAuth: false,
};

console.log(Route);

export default Route;
