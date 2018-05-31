import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';
import {hot} from 'react-hot-loader';

import PrivateRoute from './features/security/PrivateRoute';
import AuthRoutes from './features/auth/Routes';

import DashboardIndex from './features/dashboard/DashboardIndex';
import ExampleRoutes from './features/examples/Routes';
import MainLayout from './features/layout/MainLayout';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/auth" component={AuthRoutes} />
        <PrivateRoute
          path="/"
          render={() => (
            <MainLayout>
              <Switch>
                <Route exact path="/" component={DashboardIndex} />
                <Route path="/example" component={ExampleRoutes} />
                <Redirect to="/" />
              </Switch>
            </MainLayout>
          )}
        />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default hot(module)(withRouter(App));
