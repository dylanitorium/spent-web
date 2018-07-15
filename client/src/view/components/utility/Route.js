import React from 'react';
import PropTypes from 'prop-types';
import { Route as BaseRoute, Redirect } from 'react-router-dom';
import { AUTHENTICATED, UNAUTHENTICATED } from 'spent/view/routes';

const Route = (props) => {
  const {
    component: Component,
    isAuthenticated,
    authenticatedOnly,
    unauthenticatedOnly,
    ...passProps
  } = props;

  return (
    <BaseRoute
      {...passProps}
      render={(props) => {
        if (authenticatedOnly && !isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: UNAUTHENTICATED,
                state: {
                  from: props.location
                }
              }}
            />
          );
        }

        if (unauthenticatedOnly && isAuthenticated) {
          return (
            <Redirect
              to={{
                pathname: AUTHENTICATED,
                state: { from: props.location }
              }}
            />
          );
        }


        return <Component {...props} />;
      }}
    />
  );
};

Route.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  secured: PropTypes.bool,
};

Route.defaultProps = {
  authenticatedOnly: false,
};

export default Route;
