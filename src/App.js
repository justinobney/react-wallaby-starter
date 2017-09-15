import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import {withRouter} from 'react-router';

import PrivateRoute from 'features/security/PrivateRoute';
import AppHeader from 'features/layout/AppHeader';
import DashboardIndex from 'features/dashboard/DashboardIndex';
import AuthRoutes from 'features/auth/Routes';
import {Flex} from 'styles';
import SemanticTheme from 'styles/semantic';

const MainLayout = () => (
  <SemanticTheme type="column">
    <AppHeader />
    <Flex>
      <Switch>
        <Route exact path="/dashboard" component={DashboardIndex} />
        <Redirect to="/dashboard" />
      </Switch>
    </Flex>
  </SemanticTheme>
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
