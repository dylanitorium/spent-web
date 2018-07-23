import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from './styles.scss';

const linkableComponent = (WrappedComponent) => {
  class linkableComponentInternal extends Component {
    static propTypes = {
      beforeRedirect: PropTypes.func,
      className: PropTypes.string,
      disabled: PropTypes.bool,
      to: PropTypes.string,
      history: PropTypes.shape().isRequired,
    }

    static defaultProps = {
      beforeRedirect: () => {},
      className: '',
      disabled: false,
      to: '/',
    }

    isBack = () => {
      const { history, to } = this.props;
      return to === '..' && history.index !== 0;
    };

    handleClick = () => {
      const {
        disabled, beforeRedirect, history, to,
      } = this.props;

      if (disabled) {
        return;
      }

      beforeRedirect();

      if (this.isBack()) {
        history.goBack();
        return;
      }

      history.push(to);
    }

    // Lint is disabled below so we can pull out staticContext.
    // staticContext is passed to the render prop of Route when in a StaticRouter.
    // As far as I can tell we are not in a StaticRouter - yet here it is.
    render() {
      const {
        disabled,
        beforeRedirect,
        history,
        to,
        staticContext, // eslint-disable-line
        className,
        ...props
      } = this.props;

      return (
        <WrappedComponent
          className={`${className} ${styles.linkable}`}
          {...props}
          onClick={this.handleClick}
        />
      );
    }
  }

  return withRouter(linkableComponentInternal);
};

export default linkableComponent;
