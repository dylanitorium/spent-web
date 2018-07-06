import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Redirect } from 'react-router-dom';
import { store } from 'spent/state';
import { AUTHENTICATED, UNAUTHENTICATED } from 'spent/view/routes';
import { Unauthenticated } from 'spent/view/components/layouts';
import { actions } from 'spent/state/modules/history';
import createHistory from 'history/createBrowserHistory';
import Route from 'spent/view/components/connected/Route';

const history = createHistory();
store.dispatch(actions.listen(history));

export default () => (
  <Provider store={store}>
    <Router history={history}>
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
    </Router>
  </Provider>
);


