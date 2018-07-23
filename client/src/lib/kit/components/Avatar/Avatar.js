import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const Avatar = ({ onClick, imageUrl }) => (
  <button
    style={{ backgroundImage: `url(${imageUrl})` }}
    type="button"
    className={styles.avatar}
    onClick={onClick}
  />
);

Avatar.propTypes = {
  onClick: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Avatar;
