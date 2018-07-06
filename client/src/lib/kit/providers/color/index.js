import React, { Component } from 'react';
import KitPropTypes from 'kit/prop-types';

const color = (styles = { black: '' }, defaultColor = 'black') => (WrappedComponent) => {
  return class colorInteral extends Component {
    static propTypes = {
      color: KitPropTypes.themeColors,
    }

    static defaultProps = {
      color: defaultColor,
    }

    render() {
      const { color, className, ...props } = this.props;
      const classes = className ? `${className} ${styles[color]}` : styles[color];
      return <WrappedComponent className={classes} {...props} />
    }
  }
};

export default color;
