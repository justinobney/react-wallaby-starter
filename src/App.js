/** @jsx createElement */
import {createElement, Component} from 'react';
import {withRouter} from 'react-router';
import {Route, Switch} from 'react-router-dom';

import MainLayout from 'layout/MainLayout';
import PrivateRoute from 'features/security/PrivateRoute';
import LogIn from 'features/auth/LogIn';

import glamorous from 'glamorous';

const Wrapper = glamorous.div({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  paddingTop: 100,
});

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Switch>
          <Route path="/auth/login" component={LogIn} />
          <PrivateRoute path="/" component={MainLayout} />
        </Switch>
      </Wrapper>
    );
  }
}

export default withRouter(App);
