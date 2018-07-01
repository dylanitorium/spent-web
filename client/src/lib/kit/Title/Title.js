import React from 'react';
import PropTypes from 'prop-types';
import { cssUtils } from 'spent/view/utils';
import { alignments, levels } from './styles';

const tags = {
 'one': 'h1',
 'two': 'h2',
 'three': 'h3',
 'four': 'h4',
 'five': 'h5',
 'six': 'h6',
};

const Title = ({ children, level, align }) => {
  const Component = tags[level];

  return (
    <Component
      className={
        cssUtils.conditionalClasses({
          [alignments[align]]: !!align,
          [levels[level]]: !!level,
        })
      }
    >
      {children}
    </Component>
  );
}

Title.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right', false]),
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf(['one', 'two', 'three', 'four', 'five', 'six', false]),
};

Title.defaultProps = {
  align: 'left',
  level: 'one',
}

export default Title;

