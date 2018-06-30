import React from 'react';
import PropTypes from 'prop-types';
import { cssUtils } from 'spent/view/utils';
import { colors, alignments, margins } from './styles';


const Text = ({ children, color, align, margin }) => (
  <div
    className={cssUtils.conditionalClasses({
      [colors[color]]: !!color,
      [alignments[align]]: !!align,
      [margins[margin]]: !!margin,
    })}
  >
    {children}
  </div>
);

Text.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right', false]),
  margin: PropTypes.oneOf(['top', 'right', 'bottom', 'left', false]),
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['gray', 'gray-light', 'black', false]),
};

Text.defaultProps = {
  align: 'left',
  margin: 'bottom',
  color: 'black'
};

export default Text;
