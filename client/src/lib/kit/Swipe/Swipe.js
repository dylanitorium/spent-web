import React from 'react';
import { Switch } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import ReactRouterCSSTransition from 'react-router-css-transition';
import './swipe.css';

const Swipe = ({ children, location, history }) => (
  <TransitionGroup>
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

export default Swipe;
