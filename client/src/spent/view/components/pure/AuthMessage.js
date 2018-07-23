import React from 'react';
import PropTypes from 'prop-types';
import { Text, Fade } from 'kit';

const AuthMessage = ({ type, message }) => (
  <Fade.Basic stateKey={`${message}`}>
    <Text color={type} visible={!!message} align="center">
      {message}
    </Text>
  </Fade.Basic>
);

// Eslint disable below cause it's not picking up use of props
AuthMessage.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['danger', 'warning', 'info', 'success']),
};

AuthMessage.defaultProps = {
  message: undefined,
  type: 'danger',
};

export default AuthMessage;
