/** @jsx createElement */
import {createElement, Component} from 'react';
import {withRouter} from 'react-router';
import {Route, Switch} from 'react-router-dom';
import glamorous from 'glamorous';

import MainLayout from 'features/layout/MainLayout';
import PrivateRoute from 'features/security/PrivateRoute';
import LogIn from 'features/auth/LogIn';

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
