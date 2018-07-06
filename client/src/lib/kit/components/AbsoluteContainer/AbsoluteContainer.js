import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const AbsoluteContainer = (props) => {
  const {
    children, top, right, bottom,
    left, zIndex, ...rest
  } = props;

  return (
    <div className={styles.container} style={{
      top, right, bottom, left,
      zIndex
    }} {...rest}>
      {children}
    </div>
  )
};

AbsoluteContainer.propTypes = {
  children: PropTypes.node.isRequired,
  top: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  right: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  bottom: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  left: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  zIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};


AbsoluteContainer.defaultProps = {
  top: 'initial',
  right: 'initial',
  bottom: 'initial',
  left: 'initial',
  zIndex: 'initial',
};

export default AbsoluteContainer;
