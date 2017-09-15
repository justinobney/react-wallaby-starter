import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import styled from 'styled-components';
import {Button, Form, Container, Header, Segment} from 'semantic-ui-react';

import {APP_NAME} from 'constants.js';
import {actions} from 'store';
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
  _handleLogin = () => {
    this.props.login();
  };
  render() {
    const {identity, state = {}} = this.props;

    const pathname =
      state.from && state.from.pathname ? state.from.pathname : '/';

    return (
      <Wrapper>
        <Container text>
          <BoxShadow>
            <Header textAlign="center" attached="top" inverted>
              Welcome to {APP_NAME}
            </Header>
            <FormWrapper attached loading={identity.loading}>
              <Form onSubmit={this._handleLogin}>
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
            </FormWrapper>
          </BoxShadow>
          <AppFooter />
          {identity.user &&
            <Redirect
              to={{
                pathname: '/router',
                state: {to: pathname},
              }}
            />}
        </Container>
      </Wrapper>
    );
  }
}

const mapStateToProps = ({identity, router}) => ({
  identity,
  state: router.location.state,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actions.identity, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
