import React from 'react';
import PropTypes from 'prop-types';
import { cssUtils } from 'spent/view/utils';
import provide, { margin, color } from 'kit/providers';
import { base, colors, outlines } from './styles';

// Eslint is disable below because it can't determine that type is not null
// despite having a default prop
const Button = ({
  children, onClick, disabled, className, type,
}) => (
  /* eslint-disable */
  <button
    type={type}
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
  /* eslint-enable */
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  disabled: false,
  onClick: () => {},
  type: 'button',
};

const ThemedButton = ({ outline, ...props }) => {
  const Component = provide(
    margin(),
    color(outline ? outlines : colors, 'gray'),
  )(Button);
  return <Component {...props} />;
};

ThemedButton.propTypes = {
  outline: PropTypes.bool,
};

ThemedButton.defaultProps = {
  outline: false,
};

export default ThemedButton;
