import React from 'react';
import PropTypes from 'prop-types';
import { cssUtils } from 'spent/view/utils';
import provide, { margin, color } from 'kit/providers';
import { base, icons, colors } from './styles';

const Input = ({ className, rightIcon, ...props }) => (
  <div className={base.container}>
    <input
      type="text"
      className={cssUtils.conditionalClasses({
        [className]: true,
        [base.input]: true,
        [base.iconRight]: !!rightIcon,
      })}
      {...props}
    />
    { rightIcon
        && (
        <div className={icons.rightIcon}>
          {rightIcon}
        </div>
        )
      }
  </div>
);

Input.propTypes = {
  className: PropTypes.string,
  rightIcon: PropTypes.node,
};

Input.defaultProps = {
  className: '',
  rightIcon: undefined,
};

export default provide(
  margin(),
  color(colors),
)(Input);
