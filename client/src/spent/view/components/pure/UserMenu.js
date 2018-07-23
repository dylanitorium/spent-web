import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'kit';

const UserMenu = ({ onClick, imageUrl }) => <Avatar onClick={onClick} imageUrl={imageUrl} />;

UserMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default UserMenu;
