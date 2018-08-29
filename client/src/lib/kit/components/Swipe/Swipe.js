import React from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import ReactRouterCSSTransition from 'react-router-css-transition';
import './swipe.css';

const Swipe = ({ children, location, history }) => (
  <TransitionGroup style={{ height: '1px' }}>
    <ReactRouterCSSTransition
      key={location.key}
      timeout={300}
      classNames="swipe"
      history={history}
    >
      <Switch location={location}>
        {children}
      </Switch>
    </ReactRouterCSSTransition>
  </TransitionGroup>
);

Swipe.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

export default Swipe;
