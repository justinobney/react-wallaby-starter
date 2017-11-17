import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import AppHeader from 'features/layout/AppHeader';
import DashboardIndex from 'features/dashboard/DashboardIndex';
import ExampleRoutes from 'features/examples/Routes';
import Layout from 'styles/Layout';
import Theme from 'styles/theme';

const MainLayout = ({children}) => (
  <Theme>
    <AppHeader />
    <Layout.Fill>
      <Switch>
        <Route exact path="/" component={DashboardIndex} />
        <Route path="/example" component={ExampleRoutes} />
        <Redirect to="/" />
      </Switch>
    </Layout.Fill>
  </Theme>
);

export default MainLayout;
