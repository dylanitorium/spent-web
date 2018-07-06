import React, { Component } from 'react';
import PropTypes from 'prop-types';
import alignments from './styles.scss';

const alignment = (styles = alignments) => (WrappedComponent) => {
  return class alignmentInteral extends Component {
    static propTypes = {
      align: PropTypes.oneOf(['left', 'center', 'right', false]),
    }

    static defaultProps = {
      align: 'left',
    }

    render() {
      const { align, className, ...props } = this.props;
      const classes = className ? `${className} ${styles[align]}` : styles[align];
      return <WrappedComponent className={classes} {...props} />
    }
  }
};

export default alignment;
