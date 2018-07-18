import React from 'react';
import PropTypes from 'prop-types';
import alignments from './styles.scss';

const alignmentProvider = (styles = alignments) => (WrappedComponent) => {
  const alignmentInteral = ({ align, className, ...props }) => {
    const classes = className
      ? `${className} ${styles[align]}`
      : styles[align];
    return <WrappedComponent className={classes} {...props} />;
  };

  alignmentInteral.propTypes = {
    align: PropTypes.oneOf(['left', 'center', 'right', false]),
    className: PropTypes.string,
  };

  alignmentInteral.defaultProps = {
    align: 'left',
    className: '',
  };

  return alignmentInteral;
};

export default alignmentProvider;
