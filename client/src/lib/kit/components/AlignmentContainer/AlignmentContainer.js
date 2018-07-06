import React from 'react';
import PropTypes from 'prop-types';
import { cssUtils } from 'spent/view/utils';
import { base, horizontals, verticals } from './styles';

const AlignmentContainer = ({ children, vertical, horizontal }) => (
  <div className={cssUtils.conditionalClasses({
    [base.container]: true,
    [horizontals[horizontal]]: true,
    [verticals[vertical]]: true,
  })}>
    {children}
  </div>
);

AlignmentContainer.propTypes = {
  children: PropTypes.node.isRequired,
  vertical: PropTypes.oneOf(['top', 'center', 'bottom']),
  horizontal: PropTypes.oneOf(['left', 'center', 'right']),
};

AlignmentContainer.defaultProps = {
  vertical: 'center',
  horizontal: 'center',
};

export default AlignmentContainer;
