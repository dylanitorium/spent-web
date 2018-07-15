import React from 'react';
import PropTypes from 'prop-types';
import { cssUtils } from 'spent/view/utils';
import provide, { margin, color } from 'kit/providers';
import { base, icons, colors } from './styles';

const Input = ({ className, rightIcon, ...props}) => {
  return (
    <div className={base.container}>
      <input
        type='text'
        className={cssUtils.conditionalClasses({
          [className]: true,
          [base.input]: true,
          [base.iconRight]: !!rightIcon,
        })}
        {...props}
      />
      { rightIcon &&
        <div className={icons.rightIcon}>
          {rightIcon}
        </div>
      }
    </div>
  )
};

Input.propTypes = {
  rightIcon: PropTypes.node,
}

Input.defaultProps = {
  rightIcon: undefined,
}

export default provide(
  margin(),
  color(colors)
)(Input);
