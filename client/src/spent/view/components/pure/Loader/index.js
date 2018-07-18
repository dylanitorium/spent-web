import React from 'react';
import PropTypes from 'prop-types';
import { AlignmentContainer } from 'kit';
import styles from './styles.scss';

const Loader = ({ message }) => (
  <AlignmentContainer>
    <div className={styles.loader}>
      <div />
      <div />
      <div />
      <div />
    </div>
    <div>
      {message}
    </div>
  </AlignmentContainer>
);

Loader.propTypes = {
  message: PropTypes.string,
};

Loader.defaultProps = {
  message: 'Loading...',
};

export default Loader;
