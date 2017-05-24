/** @jsx createElement */
import {createElement} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import DashboardIndex from 'features/dashboard/DashboardIndex';
import {Col} from 'styles';

const MainLayout = () => (
  <Col>
    <AppHeader />
    <Switch>
      <Route exact path="/dashboard" component={DashboardIndex} />
      <Redirect to="/dashboard" />
    </Switch>
    <AppFooter />
  </Col>
);

export default MainLayout;
