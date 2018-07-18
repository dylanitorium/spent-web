import React from 'react';
import PropTypes from 'prop-types';
import { cssUtils } from 'spent/view/utils';
import provide, { margin, alignment, color } from 'kit/providers';
import { colors, displays, sizes } from './styles';

const Text = ({
  children, display, className, size, ...props
}) => (
  <span
    {...props}
    className={cssUtils.conditionalClasses({
      [displays[display]]: !!display,
      [sizes[size]]: !!size,
      [className]: true,
    })}
  >
    {children}
  </span>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  display: PropTypes.oneOf(['inline', 'inline-block', 'block', 'none', false]),
  size: PropTypes.oneOf(['large']),
};

Text.defaultProps = {
  className: '',
  display: 'block',
  size: undefined,
};

export default provide(
  margin(),
  alignment(),
  color(colors),
)(Text);
