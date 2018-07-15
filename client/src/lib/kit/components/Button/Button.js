import React from 'react';
import PropTypes from 'prop-types';
import { cssUtils } from 'spent/view/utils';
import { base, colors, outlines } from './styles';
import provide, { margin, color } from 'kit/providers';

const Button = ({ children, onClick, disabled, className }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cssUtils.conditionalClasses({
        [base.button]: true,
        [base.disabled]: disabled,
        [className]: true,
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  outline: false,
  disabled: false,
  onClick: () => {},
};

const ThemedButton = ({ outline, ...props }) => {
 const Component =  provide(
   margin(),
   color(outline ? outlines : colors, 'gray'),
  )(Button);
 return <Component {...props} />
};

ThemedButton.propTypes = {
  outline: PropTypes.bool,
}

ThemedButton.defaultProps = {
  outline: false,
};

export default ThemedButton;
