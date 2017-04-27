/** @jsx createElement */
import {createElement} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import DashboardIndex from 'features/dashboard/DashboardIndex';

const MainLayout = () => (
  <div className="flex-wrapper">
    <AppHeader />
    <Switch>
      <Route exact path="/dashboard" component={DashboardIndex} />
      <Redirect to="/dashboard" />
    </Switch>
    <AppFooter />
  </div>
);

export default MainLayout;
