import React from 'react';
import PropTypes from 'prop-types';
import KitPropTypes from 'kit/prop-types';

const colorProvider = (styles = { black: '' }, defaultColor = 'black') => (WrappedComponent) => {
  const colorInteral = ({ color, className, ...props }) => {
    const classes = className ? `${className} ${styles[color]}` : styles[color];
    return <WrappedComponent className={classes} {...props} />;
  };

  colorInteral.propTypes = {
    color: KitPropTypes.themeColors,
    className: PropTypes.string,
  };

  colorInteral.defaultProps = {
    color: defaultColor,
    className: '',
  };

  return colorInteral;
};

export default colorProvider;
