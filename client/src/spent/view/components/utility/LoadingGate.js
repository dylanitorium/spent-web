import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from 'kit';

const LoadingGate = ({
  loadingComponent: Loading,
  children, isLoading,
}) => {
  const render = isLoading ? <Loading /> : children;
  const key = isLoading ? 'loading' : 'loaded';
  const flex = { flex: 1, display: 'flex', flexDirection: 'column' };
  return (
    <Fade.Basic stateKey={key} style={flex}>
      {render}
    </Fade.Basic>
  );
};

LoadingGate.propTypes = {
  loadingComponent: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default LoadingGate;
