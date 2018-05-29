import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import {hot} from 'react-hot-loader';

import PrivateRoute from 'features/security/PrivateRoute';
import AuthRoutes from 'features/auth/Routes';
import MainRoutes from 'features/layout/MainRoutes';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/auth" component={AuthRoutes} />
        <PrivateRoute path="/" component={MainRoutes} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default hot(module)(withRouter(App));
