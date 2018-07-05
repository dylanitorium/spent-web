import React from 'react';
import PropTypes from 'prop-types';
import { cssUtils } from 'spent/view/utils';
import { colors, alignments, margins, displays } from './styles';

const Text = ({
  children, color, align, margin,
  display, ...props
}) => (
  <span
    {...props}
    className={cssUtils.conditionalClasses({
      [alignments[align]]: !!align,
      [colors[color]]: !!color,
      [displays[display]]: !!display,
      [margins[margin]]: !!margin,
    })}
  >
    {children}
  </span>
);

Text.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right', false]),
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['gray', 'gray-light', 'black', 'primary', false]),
  display: PropTypes.oneOf(['inline', 'inline-block', 'block', 'none', false]),
  margin: PropTypes.oneOf(['top', 'right', 'bottom', 'left', false]),
};

Text.defaultProps = {
  align: 'left',
  color: 'black',
  display: 'block',
  margin: 'bottom',
};

export default Text;
