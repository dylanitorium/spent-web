import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>{children}</button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button;
