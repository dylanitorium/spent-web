import React from 'react';
import PropTypes from 'prop-types';
import addOneClass from 'dom-helpers/class/addClass';
import removeOneClass from 'dom-helpers/class/removeClass';
import RouterTransition from './Transition';


const addClass = (node, classes) => node && classes && classes.split(' ').forEach(c => addOneClass(node, c));
const removeClass = (node, classes) => node && classes && classes.split(' ').forEach(c => removeOneClass(node, c));


class ReactRouterCSSTransition extends React.Component {
  static reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */
      addClass(node, className);
    }
  }

  onEnter = (node, appearing) => {
    const { props } = this;
    const { className } = this.getClassNames(appearing ? 'appear' : 'enter');

    this.removeClasses(node, 'exit');
    addClass(node, className);

    if (props.onEnter) {
      props.onEnter(node);
    }
  };

  onEntering = (node, appearing) => {
    const { props } = this;
    const { activeClassName } = this.getClassNames(
      appearing ? 'appear' : 'enter',
    );

    ReactRouterCSSTransition.reflowAndAddClass(node, activeClassName);

    if (props.onEntering) {
      props.onEntering(node);
    }
  };

  onEntered = (node, appearing) => {
    const { props } = this;
    this.removeClasses(node, appearing ? 'appear' : 'enter');

    if (props.onEntered) {
      props.onEntered(node);
    }
  };

  onExit = (node) => {
    const { props } = this;
    const { className } = this.getClassNames('exit');

    this.removeClasses(node, 'appear');
    this.removeClasses(node, 'enter');
    addClass(node, className);

    if (props.onExit) {
      props.onExit(node);
    }
  };

  onExiting = (node) => {
    const { props } = this;
    const { activeClassName } = this.getClassNames('exit');

    ReactRouterCSSTransition.reflowAndAddClass(node, activeClassName);

    if (props.onExiting) {
      props.onExiting(node);
    }
  };

  onExited = (node) => {
    const { props } = this;
    this.removeClasses(node, 'exit');

    if (props.onExited) {
      props.onExited(node);
    }
  };

  getClassNames = (type) => {
    const {
      classNames,
      history: { action },
    } = this.props;

    const className = typeof classNames !== 'string'
      ? `${classNames[type]}-${action.toLowerCase()}`
      : `${classNames}-${type}-${action.toLowerCase()}`;

    const activeClassName = typeof classNames !== 'string'
      ? `${classNames[`${type}Active`]}-${action.toLowerCase()}`
      : `${className}-active`;

    const doneClassName = typeof classNames !== 'string'
      ? `${classNames[`${type}Done`]}-${action.toLowerCase()}`
      : `${className}-done`;

    return {
      className,
      activeClassName,
      doneClassName,
    };
  };

  removeClasses(node, type) {
    const { className, activeClassName, doneClassName } = this.getClassNames(
      type,
    );
    if (className) removeClass(node, className);
    if (activeClassName) removeClass(node, activeClassName);
    if (doneClassName) removeClass(node, doneClassName);
  }

  render() {
    const props = { ...this.props };
    delete props.classNames;

    return (
      <RouterTransition
        {...props}
        onEnter={this.onEnter}
        onEntered={this.onEntered}
        onEntering={this.onEntering}
        onExit={this.onExit}
        onExiting={this.onExiting}
        onExited={this.onExited}
      />
    );
  }
}

ReactRouterCSSTransition.propTypes = {
  history: PropTypes.shape().isRequired,
  onEnter: PropTypes.func,
  onEntering: PropTypes.func,
  onEntered: PropTypes.func,
  onExit: PropTypes.func,
  onExiting: PropTypes.func,
  onExited: PropTypes.func,
  classNames: PropTypes.string,
};

ReactRouterCSSTransition.defaultProps = {
  onEnter: () => {},
  onEntering: () => {},
  onEntered: () => {},
  onExit: () => {},
  onExiting: () => {},
  onExited: () => {},
  classNames: '',
};


export default ReactRouterCSSTransition;
