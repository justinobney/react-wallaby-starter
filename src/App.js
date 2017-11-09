import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';

import PrivateRoute from 'features/security/PrivateRoute';
import AppHeader from 'features/layout/AppHeader';
import DashboardIndex from 'features/dashboard/DashboardIndex';
import AuthRoutes from 'features/auth/Routes';
import ExampleRoutes from 'features/examples/Routes';
import {Fill} from 'styles';
import Theme from 'styles/theme';

const MainLayout = () => (
  <Theme>
    <AppHeader />
    <Fill>
      <Switch>
        <Route exact path="/" component={DashboardIndex} />
        <Route path="/example" component={ExampleRoutes} />
        <Redirect to="/" />
      </Switch>
    </Fill>
  </Theme>
);

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/auth" component={AuthRoutes} />
        <PrivateRoute path="/" component={MainLayout} />
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default withRouter(App);
