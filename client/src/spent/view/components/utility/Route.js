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

  const RouteRender = ({ location }) => {
    if (authenticatedOnly && !isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: UNAUTHENTICATED,
            state: {
              from: location,
            },
          }}
        />
      );
    }

    if (unauthenticatedOnly && isAuthenticated) {
      return (
        <Redirect
          to={{
            pathname: AUTHENTICATED,
            state: { from: location },
          }}
        />
      );
    }

    return <Component {...props} />;
  };

  RouteRender.propTypes = { location: PropTypes.shape().isRequired };

  return <BaseRoute {...passProps} render={RouteRender} />;
};

Route.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  authenticatedOnly: PropTypes.bool,
  unauthenticatedOnly: PropTypes.bool,
  secured: PropTypes.bool,
};

Route.defaultProps = {
  authenticatedOnly: false,
  unauthenticatedOnly: false,
  secured: false,
};

export default Route;
