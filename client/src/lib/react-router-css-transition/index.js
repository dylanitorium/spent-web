import React from 'react';
import PropTypes from 'prop-types';
import addOneClass from 'dom-helpers/class/addClass';
import removeOneClass from 'dom-helpers/class/removeClass';

import { Transition, CSSTransition } from 'react-transition-group';

const addClass = (node, classes) => node && classes && classes.split(' ').forEach(c => addOneClass(node, c));
const removeClass = (node, classes) => node && classes && classes.split(' ').forEach(c => removeOneClass(node, c));

const HISTORY_ACTIONS = {
  POP: 'POP',
  PUSH: 'PUSH',
  REPLACE: 'REPLACE'
};

const propTypes = {
  ...CSSTransition.propTypes,
  action: PropTypes.oneOf(Object.keys(HISTORY_ACTIONS)),
};

class ReactRouterCSSTransition extends React.Component {
  onEnter = (node, appearing) => {
    const { className } = this.getClassNames(appearing ? 'appear' : 'enter')

    this.removeClasses(node, 'exit');
    addClass(node, className)

    if (this.props.onEnter) {
      this.props.onEnter(node)
    }
  }

  onEntering = (node, appearing) => {
    const { activeClassName } = this.getClassNames(
      appearing ? 'appear' : 'enter'
    );

    this.reflowAndAddClass(node, activeClassName)

    if (this.props.onEntering) {
      this.props.onEntering(node)
    }
  }

  onEntered = (node, appearing) => {
    const { doneClassName } = this.getClassNames('enter');

    this.removeClasses(node, appearing ? 'appear' : 'enter');
    addClass(node, doneClassName);

    if (this.props.onEntered) {
      this.props.onEntered(node)
    }
  }

  onExit = (node) => {
    const { className } = this.getClassNames('exit')

    this.removeClasses(node, 'appear');
    this.removeClasses(node, 'enter');
    addClass(node, className)

    if (this.props.onExit) {
      this.props.onExit(node)
    }
  }

  onExiting = (node) => {
    const { activeClassName } = this.getClassNames('exit')

    this.reflowAndAddClass(node, activeClassName)

    if (this.props.onExiting) {
      this.props.onExiting(node)
    }
  }

  onExited = (node) => {
    const { doneClassName } = this.getClassNames('exit');

    addClass(node, doneClassName);

    this.removeClasses(node, 'exit');


    if (this.props.onExited) {
      this.props.onExited(node)
    }
  }

  getClassNames = (type) => {
    const { classNames, action } = this.props;

    let className = typeof classNames !== 'string'
      ? classNames[type] + '-' + action.toLowerCase()
      : classNames + '-' + type + '-' + action.toLowerCase();

    let activeClassName = typeof classNames !== 'string'
      ? classNames[type + 'Active'] + '-' + action.toLowerCase()
      : className + '-active';

    let doneClassName = typeof classNames !== 'string'
      ? classNames[type + 'Done'] + '-' + action.toLowerCase()
      : className + '-done';

    return {
      className,
      activeClassName,
      doneClassName
    };
  }

  removeClasses(node, type) {
    const { className, activeClassName, doneClassName } = this.getClassNames(type)
    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  }

  reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */
      addClass(node, className);
    }
  }

  render() {
    const props = { ...this.props };
    delete props.classNames;

    return (
      <Transition
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

ReactRouterCSSTransition.propTypes = propTypes;

export default ReactRouterCSSTransition

