import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import styled from 'react-emotion';
import {Button, Form, Container, Header, Segment} from 'semantic-ui-react';
import {withActions, isBusy, getError} from 'actionware';

import {login} from 'store/identity';
import {APP_NAME} from 'constants.js';
import AppFooter from 'features/layout/AppFooter';

const Wrapper = styled.div`margin-top: 100px;`;
const BoxShadow = styled.div`box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);`;
const FormWrapper = styled(Segment)`
  &.ui.attached.segment {
    padding-top: 20px;
    margin-bottom: 20px;
  }
`;

export class LogIn extends Component {
  render() {
    const {loading, error, user, state = {}, login} = this.props;

    const pathname =
      state.from && state.from.pathname ? state.from.pathname : '/';

    return (
      <Wrapper>
        <Container text>
          <BoxShadow>
            <Header textAlign="center" attached="top" inverted>
              Welcome to {APP_NAME}
            </Header>
            <FormWrapper attached loading={loading}>
              <Form onSubmit={login}>
                <Form.Field>
                  <label>Email Address</label>
                  <input type="email" />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input type="password" />
                </Form.Field>
                <Button type="submit" primary>
                  Log In
                </Button>
                <Button as={Link} to="/auth/signup">
                  Sign Up
                </Button>
              </Form>
              {error && error.message}
            </FormWrapper>
          </BoxShadow>
          <AppFooter />
          {user && (
            <Redirect
              to={{
                pathname: '/router',
                state: {to: pathname},
              }}
            />
          )}
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({identity, router}) => {
  return {
    user: identity.user,
    state: router.location.state,
    login: login,
    loading: isBusy(login),
    error: getError(login),
  };
};

const LogInWithActions = withActions({login})(LogIn);
export default connect(mapStateToProps)(LogInWithActions);
