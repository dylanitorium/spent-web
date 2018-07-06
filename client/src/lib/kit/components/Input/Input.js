import React from 'react';
import PropTypes from 'prop-types';
import { cssUtils } from 'spent/view/utils';
import provide, { margin } from 'kit/providers';
import { base } from './styles';

const Input = ({ className, ...props}) => {
  return (
    <input
      type='text'
      className={cssUtils.conditionalClasses({
        [base.input]: true,
        [className]: true,
      })}
      {...props}
    />
  )
};

export default provide(margin())(Input);
