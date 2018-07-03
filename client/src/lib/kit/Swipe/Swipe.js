import React from 'react';
import { Switch } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import ReactRouterCSSTransition from 'react-router-css-transition';
import './swipe.css'

const Swipe = ({ children, history }) => (
  <TransitionGroup>
    <ReactRouterCSSTransition
      key={history.location.key}
      action={history.action}
      timeout={300}
      classNames="swipe"
    >
      <Switch location={history.location}>
        {children}
      </Switch>
    </ReactRouterCSSTransition>
  </TransitionGroup>
);

export default Swipe;
