import React, { Component } from 'react';
import PropTypes from 'prop-types';
import margins from './styles.scss';

const margin = (styles = margins) => (WrappedComponent) => {
  return class marginInteral extends Component {
    static propTypes = {
      className: PropTypes.string,
      margin: PropTypes.oneOf(['top', 'right', 'bottom', 'left', false]),
    }

    static defaultProps = {
      margin: 'bottom',
      className: '',
    }

    render() {
      const { margin, className, ...props } = this.props;
      const classes = margin ? `${className} ${styles[margin]}` : className;
      return <WrappedComponent className={classes} {...props} />
    }
  }
};

export default margin;
