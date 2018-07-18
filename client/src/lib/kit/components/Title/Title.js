import React from 'react';
import PropTypes from 'prop-types';
import { cssUtils } from 'spent/view/utils';
import provide, { alignment } from 'kit/providers';
import { levels } from './styles';

const tags = {
  one: 'h1',
  two: 'h2',
  three: 'h3',
  four: 'h4',
  five: 'h5',
  six: 'h6',
};

const Title = ({
  children, level, className, ...props
}) => {
  const Component = tags[level];

  return (
    <Component
      {...props}
      className={
        cssUtils.conditionalClasses({
          [levels[level]]: !!level,
          [className]: true,
        })
      }
    >
      {children}
    </Component>
  );
};

Title.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf(['one', 'two', 'three', 'four', 'five', 'six', false]),
};

Title.defaultProps = {
  level: 'one',
};

export default provide(alignment())(Title);
