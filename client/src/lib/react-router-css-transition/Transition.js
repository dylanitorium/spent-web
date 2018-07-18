/* eslint-disable */
import * as PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { polyfill } from 'react-lifecycles-compat';

import { timeoutsShape } from './utils/PropTypes';

export const UNMOUNTED = 'unmounted';
export const EXITED = 'exited';
export const ENTERING = 'entering';
export const ENTERED = 'entered';
export const EXITING = 'exiting';

class Transition extends React.Component {
  static contextTypes = {
    transitionGroup: PropTypes.shape()
  };

  static childContextTypes = {
    transitionGroup: () => {}
  };

  constructor(props, context) {
    super(props, context);

    const parentGroup = context.transitionGroup;
    // In the context of a TransitionGroup all enters are really appears
    const appear =
      parentGroup && !parentGroup.isMounting ? props.enter : props.appear;

    let initialStatus;

    this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else if (props.unmountOnExit || props.mountOnEnter) {
      initialStatus = UNMOUNTED;
    } else {
      initialStatus = EXITED;
    }

    this.state = { status: initialStatus };

    this.nextCallback = null;
  }

  static getDerivedStateFromProps({ in: nextIn }, prevState) {
    if (nextIn && prevState.status === UNMOUNTED) {
      return { status: EXITED };
    }
    return null;
  }

  getChildContext() {
    return { transitionGroup: null }; // allows for nested Transitions
  }

  componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  }

  componentDidUpdate(prevProps) {
    const { props } = this;
    let nextStatus = null;
    if (prevProps !== props) {
      const { status } = this.state;

      if (props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else if (status === ENTERING || status === ENTERED) {
        nextStatus = EXITING;
      }
    }
    this.updateStatus(false, nextStatus);
  }

  componentWillUnmount() {
    this.cancelNextCallback();
  }

  nodeAlreadyExists = node => {
    if (!node) {
      return undefined;
    }

    const { id } = node;
    const dup = document.querySelectorAll(`#${id}`);
    return dup.length > 1;
  };

  cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  }

  safeSetState(nextState, callback) {
    const nextCallback = this.setNextCallback(callback);
    this.setState(nextState, nextCallback);
  }

  onTransitionEnd(node, timeout, handler) {
    const { props } = this;
    this.setNextCallback(handler);

    if (node) {
      if (props.addEndListener) {
        props.addEndListener(node, this.nextCallback);
      }
      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  }

  setNextCallback(callback) {
    let active = true;

    this.nextCallback = event => {
      if (active) {
        active = false;
        this.nextCallback = null;

        callback(event);
      }
    };

    this.nextCallback.cancel = () => {
      active = false;
    };

    return this.nextCallback;
  }

  getTimeouts() {
    const { timeout } = this.props;
    const exit = timeout.exit || timeout;
    const enter = timeout.enter || timeout;
    const appear = timeout.appear || timeout;
    return { exit, enter, appear };
  }

  performEnter(node, mounting) {
    const { context, props } = this;

    const appearing = context.transitionGroup
      ? context.transitionGroup.isMounting
      : mounting;

    const timeouts = this.getTimeouts();

    // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set
    if ((!mounting && !props.enter) || this.nodeAlreadyExists(node)) {
      this.safeSetState({ status: ENTERED }, () => {
        props.onEntered(node);
      });
      return;
    }

    props.onEnter(node, appearing);

    this.safeSetState({ status: ENTERING }, () => {
      props.onEntering(node, appearing);

      // FIXME: appear timeout?
      this.onTransitionEnd(node, timeouts.enter, () => {
        this.safeSetState({ status: ENTERED }, () => {
          props.onEntered(node, appearing);
        });
      });
    });
  }

  performExit(node) {
    const { props } = this;
    const timeouts = this.getTimeouts();

    // no exit animation skip right to EXITED
    if (!props.exit || this.nodeAlreadyExists(node)) {
      this.safeSetState({ status: EXITED }, () => {
        props.onExited(node);
      });
      return;
    }
    props.onExit(node);

    this.safeSetState({ status: EXITING }, () => {
      props.onExiting(node);

      this.onTransitionEnd(node, timeouts.exit, () => {
        this.safeSetState({ status: EXITED }, () => {
          props.onExited(node);
        });
      });
    });
  }

  updateStatus(mounting = false, nextStatus) {
    const { props, state } = this;
    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      const node = ReactDOM.findDOMNode(this); // eslint-disable-line

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (props.unmountOnExit && state.status === EXITED) {
      this.setState({ status: UNMOUNTED });
    }
  }

  render() {
    const status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }

    const { children, ...childProps } = this.props;
    // filter props for Transtition
    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === "function") {
      return children(status, childProps);
    }

    const child = React.Children.only(children);
    return React.cloneElement(child, childProps);
  }
}

Transition.propTypes = {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.element.isRequired,
  ]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: (props, ...args) => {
    let pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    return pt(props, ...args);
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func,
};

// Name the function so it is clearer in the documentation
function noop() { }

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,

  onEnter: noop,
  onEntering: noop,
  onEntered: noop,

  onExit: noop,
  onExiting: noop,
  onExited: noop,
};

Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

export default polyfill(Transition);
