import React from 'react';
import PropTypes from 'prop-types';
import margins from './styles.scss';

const marginProvider = (styles = margins) => (WrappedComponent) => {
  const marginInteral = ({ margin, className, ...props }) => {
    const classes = margin ? `${className} ${styles[margin]}` : className;
    return <WrappedComponent className={classes} {...props} />;
  };

  marginInteral.propTypes = {
    className: PropTypes.string,
    margin: PropTypes.oneOf(['top', 'right', 'bottom', 'left', false]),
  };

  marginInteral.defaultProps = {
    margin: 'bottom',
    className: '',
  };

  return marginInteral;
};

export default marginProvider;
