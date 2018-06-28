import React from 'react';
import PropTypes from 'prop-types';
import { cssUtils } from 'spent/view/utils';
import base from './base.scss';
import horizontalClasses from './horizontal.scss';
import verticalClasses from './vertical.scss';


const directions = {
  vertical: [
    'top', 'center', 'bottom'
  ],
  horizontal: [
    'left', 'center', 'right'
  ],
};


const AlignmentContainer = ({ children, vertical, horizontal }) => (
  <div className={cssUtils.conditionalClasses({
    [base.container]: true,
    [verticalClasses[vertical]]: true,
    [horizontalClasses[horizontal]]: true,
  })}>
    {children}
  </div>
);

AlignmentContainer.propTypes = {
  children: PropTypes.node.isRequired,
  vertical: PropTypes.oneOf(directions.vertical),
  horizontal: PropTypes.oneOf(directions.horizontal),
};

AlignmentContainer.defaultProps = {
  vertical: 'center',
  horizontal: 'center',
};

export default AlignmentContainer;
