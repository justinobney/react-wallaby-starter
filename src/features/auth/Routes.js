import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';

import LogIn from './LogIn';
import SignUp from './SignUp';

const Routes = ({match}) => (
  <Switch>
    <Route path={`${match.path}/login`} component={LogIn} />
    <Route path={`${match.path}/signup`} component={SignUp} />
    <Redirect to="/login" />
  </Switch>
);
export default Routes;
