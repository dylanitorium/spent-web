import React from 'react';
import { Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './fade.css'

const Fade = ({ children, location }) => (
  <TransitionGroup>
    <CSSTransition key={location.key} timeout={{ enter: 300, exit: 0 }} classNames="fade">
      <Switch location={location}>
        {children}
      </Switch>
    </CSSTransition>
  </TransitionGroup>
);

export default Fade;
