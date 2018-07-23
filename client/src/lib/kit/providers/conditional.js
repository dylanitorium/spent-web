import React from 'react';
import PropTypes from 'prop-types';


const conditional = (WrappedComponent) => {
  const conditionalInternal = ({ visible, ...props }) => (
    visible && <WrappedComponent {...props} />
  );

  conditionalInternal.propTypes = {
    visible: PropTypes.bool,
  };

  conditionalInternal.defaultProps = {
    visible: true,
  };

  return conditionalInternal;
};

export default conditional;
