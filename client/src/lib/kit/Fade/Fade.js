import React from 'react';
import { Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './fade.css'

const Fade = ({ children, history }) => (
  <TransitionGroup>
    <CSSTransition key={history.location.key} timeout={300} classNames="fade">
      <Switch location={history.location}>
        {children}
      </Switch>
    </CSSTransition>
  </TransitionGroup>
);

export default Fade;
