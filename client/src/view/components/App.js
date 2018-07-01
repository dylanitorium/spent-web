import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { store } from 'spent/state';
import { AUTHENTICATED, UNAUTHENTICATED } from 'spent/view/routes';
import { Unauthenticated } from 'spent/view/components/layouts';
import Route from 'spent/view/components/connected/Route';

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (
            <Redirect
              to={{ pathname: AUTHENTICATED, state: { from: '/' }}}
            />)
          }
        />
        <Route requiresAuth path={AUTHENTICATED} component={() => <div>hi</div>} />
        <Route path={UNAUTHENTICATED} component={Unauthenticated} />
      </Switch>
    </BrowserRouter>
  </Provider>
);


