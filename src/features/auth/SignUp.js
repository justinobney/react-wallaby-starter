import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import styled from 'react-emotion';
import {Button, Form, Container, Header, Segment} from 'semantic-ui-react';
import {withActions, isBusy} from 'actionware';
import {login} from 'store/identity';

import AppFooter from 'features/layout/AppFooter';

const Wrapper = styled.div`margin-top: 100px;`;
const BoxShadow = styled.div`box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);`;
const FormWrapper = styled(Segment)`
  &.ui.attached.segment {
    padding-top: 20px;
    margin-bottom: 20px;
  }
`;

export class SignUp extends Component {
  _handleSignup = () => {
    this.props.login();
  };
  render() {
    const {loading, user} = this.props;

    return (
      <Wrapper>
        <Container text>
          <BoxShadow>
            <Header textAlign="center" attached="top" inverted>
              Sign up for a new account!
            </Header>
            <FormWrapper attached loading={loading}>
              <Form onSubmit={this._handleSignup}>
                <Form.Field>
                  <label>Email Address</label>
                  <input type="email" />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input type="password" />
                </Form.Field>
                <Button type="submit" primary>
                  Sign Up
                </Button>
                <Button as={Link} to="/auth/login">
                  Log In
                </Button>
              </Form>
            </FormWrapper>
          </BoxShadow>
          <AppFooter />
          {user && <Redirect to="/" />}
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
  };
};

const SignUpWithActions = withActions({login})(SignUp);
export default connect(mapStateToProps)(SignUpWithActions);
