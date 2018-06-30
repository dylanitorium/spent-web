import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
// import AuthenticatedRoute from 'spent/view/components/connected/AuthenticatedRoute';
import { store } from 'spent/state';
import { routes } from 'spent/view/routes';
import { Landing } from 'spent/view/components/layouts';



export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path={routes.UNAUTHENTICATED} component={Landing} />
      {/*<Route path={routes.SIGN_IN} component={About} />*/}
      {/*<Route path={routes.SIGN_UP} component={Topics} />*/}
      {/*<AuthenticatedRoute path={routes.AUTHENTICATED} component={Topics} />*/}
    </BrowserRouter>
  </Provider>
);


