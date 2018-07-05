import React from 'react';
import { Switch } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import ReactRouterCSSTransition from 'react-router-css-transition';
import './fade.css'

const Fade = ({ children, location, history }) => (
  <TransitionGroup>
    <ReactRouterCSSTransition
      key={location.key}
      timeout={300}
      classNames="fade"
      history={history}
    >
      <Switch location={location}>
        {children}
      </Switch>
    </ReactRouterCSSTransition>
  </TransitionGroup>
);

export default Fade;
