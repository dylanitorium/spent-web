import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch } from 'react-router-dom';
import { store } from 'spent/state';
import { AUTHENTICATED, UNAUTHENTICATED } from 'spent/view/routes';
import {
  Unauthenticated,
  Loading,
  Dashboard,
} from 'spent/view/components/layouts';
import { actions as historyActions } from 'spent/state/modules/history';
import { actions as authActions } from 'spent/state/modules/auth';
import createHistory from 'history/createBrowserHistory';
import Route from 'spent/view/components/connected/Route';
import LoadingGate from 'spent/view/components/connected/LoadingGate';

const history = createHistory();
store.dispatch(historyActions.listen(history));
store.dispatch(authActions.listen(history));

export default () => (
  <Provider store={store}>
    <LoadingGate loadingComponent={Loading}>
      <Router history={history}>
        <Switch>
          <Route
            exact
            authenticatedOnly
            path={AUTHENTICATED}
            component={
              () => <Dashboard store={store} unauthenticate={authActions.unauthenticate} />
            }
          />
          <Route unauthenticatedOnly path={UNAUTHENTICATED} component={Unauthenticated} />
        </Switch>
      </Router>
    </LoadingGate>
  </Provider>
);
