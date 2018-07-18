import PropTypes from 'prop-types';

export function transitionTimeout(transitionType) {
  const timeoutPropName = `transition${transitionType}Timeout`;
  const enabledPropName = `transition${transitionType}`;

  return (props) => {
    const { [enabledPropName]: enabledProp, [timeoutPropName]: timeoutProps } = props;
    // If the transition is enabled
    if (enabledProp) {
      // If no timeout duration is provided
      if (timeoutProps == null) {
        return new Error(`${timeoutPropName} wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.`);

        // If the duration isn't a number
      }
      if (typeof timeoutProps !== 'number') {
        return new Error(`${timeoutPropName} must be a number (in milliseconds)`);
      }
    }

    return null;
  };
}

export const timeoutsShape = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number,
  }).isRequired,
]);

export const classNamesShape = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.shape({
    enter: PropTypes.string,
    exit: PropTypes.string,
    active: PropTypes.string,
  }),
  PropTypes.shape({
    enter: PropTypes.string,
    enterDone: PropTypes.string,
    enterActive: PropTypes.string,
    exit: PropTypes.string,
    exitDone: PropTypes.string,
    exitActive: PropTypes.string,
  }),
]);
