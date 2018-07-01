import React from 'react';
import PropTypes from 'prop-types';
import { cssUtils } from 'spent/view/utils';
import { base, margins } from './styles';

const Button = ({ children, margin, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={cssUtils.conditionalClasses({
        [base.button]: true,
        [margins[margin]]: !!margin,
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  margin: PropTypes.oneOf(['top', 'right', 'bottom', 'left', false]),
  onClick: PropTypes.func.isRequired,
}

export default Button;
