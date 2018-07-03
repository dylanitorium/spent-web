import React from 'react';
import PropTypes from 'prop-types';
import SpentPropTypes from 'spent/view/utils/prop-types';
import { cssUtils } from 'spent/view/utils';
import { base, margins, colors, outlines } from './styles';

const Button = ({ children, margin, outline, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cssUtils.conditionalClasses({
        [base.button]: true,
        [margins[margin]]: !!margin,
        [outline ? outlines[color] : colors[color]]: !!color,
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.oneOf(['top', 'right', 'bottom', 'left', false]),
  outline: PropTypes.bool,
  color: SpentPropTypes.themeColors,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  outline: false,
  color: 'gray',
};

export default Button;
