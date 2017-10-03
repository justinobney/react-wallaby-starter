import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import Form from './Form';

const Routes = ({match}) => (
  <Switch>
    <Route path={`${match.path}/form`} component={Form} />
    <Redirect to="/" />
  </Switch>
);
export default Routes;
