import React from 'react';
import PropTypes from 'prop-types';
import { cssUtils } from 'spent/view/utils';
import {
  base, horizontals, verticals, directions,
} from './styles';

const AlignmentContainer = ({
  children, vertical, horizontal, direction,
}) => (
  <div className={cssUtils.conditionalClasses({
    [base.container]: true,
    [horizontals[horizontal]]: true,
    [verticals[vertical]]: true,
    [directions[direction]]: true,
  })}
  >
    {children}
  </div>
);

AlignmentContainer.propTypes = {
  children: PropTypes.node.isRequired,
  vertical: PropTypes.oneOf(['top', 'center', 'bottom']),
  horizontal: PropTypes.oneOf(['left', 'center', 'right', 'space-between']),
  direction: PropTypes.oneOf(['column', 'row']),
};

AlignmentContainer.defaultProps = {
  vertical: 'center',
  horizontal: 'center',
  direction: 'column',
};

export default AlignmentContainer;
