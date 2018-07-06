import React from 'react';
import PropTypes from 'prop-types';
import { cssUtils } from 'spent/view/utils';
import { colors,  displays } from './styles';
import provide, { margin, alignment, color } from 'kit/providers';

const Text = ({
  children, display, className, ...props
}) => (
  <span
    {...props}
    className={cssUtils.conditionalClasses({
      [displays[display]]: !!display,
      [className]: true,
    })}
  >
    {children}
  </span>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  display: PropTypes.oneOf(['inline', 'inline-block', 'block', 'none', false]),
};

Text.defaultProps = {
  display: 'block',
};

export default provide(
  margin(),
  alignment(),
  color(colors),
)(Text);
