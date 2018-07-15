import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { parsePath } from 'history';


const linkableComponent = (WrappedComponent) => {
  class linkableComponentInternal extends Component {
    static propTypes = {
      to: PropTypes.string,
      disabled: PropTypes.bool,
      beforeRedirect: PropTypes.func
    }

    static defaultProps = {
      to: '/',
      disabled: false,
      beforeRedirect: () => {},
    }

    isBack = () => {
      const { history, to } = this.props;
      return to === '..' && history.index !== 0
    };

    handleClick = () => {
      const { disabled, beforeRedirect, history, to } = this.props;

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

    render() {
      const { disabled, beforeRedirect, history, to, ...props } = this.props;

      return <WrappedComponent {...props} onClick={this.handleClick} />;
    }
  }

  return withRouter(linkableComponentInternal);
}

export default linkableComponent;
