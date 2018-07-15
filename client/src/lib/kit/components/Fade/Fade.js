import React from 'react';
import { Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ReactRouterCSSTransition from 'react-router-css-transition';
import './fade.css';

const Router = ({ children, location, history }) => (
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

const Basic = ({ children, stateKey, style }) => (
  <TransitionGroup style={style}>
    <CSSTransition
      key={stateKey}
      timeout={300}
      classNames="fade"
    >
      {children}
    </CSSTransition>
  </TransitionGroup>
);

export default {
  Router,
  Basic
};
