import React from 'react';
import PropTypes from 'prop-types';
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

Router.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape().isRequired,
  history: PropTypes.shape().isRequired,
};

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

Basic.propTypes = {
  children: PropTypes.node.isRequired,
  stateKey: PropTypes.string.isRequired,
  style: PropTypes.shape().isRequired,
};

export default {
  Router,
  Basic,
};
