import React from 'react';
import {withRouter} from 'react-router';
import {Link, NavLink} from 'react-router-dom';
import {
  Container,
  Dropdown,
  Icon,
  Label,
  Menu,
  Responsive,
} from 'semantic-ui-react';
import {connect} from 'react-redux';
import styled from 'react-emotion';
import {withActions} from 'actionware';

import {logout} from 'store/identity';
import {fixed} from 'styles';
import {APP_NAME, RESPONSIVE_SIZES} from 'constants.js';
import {colors} from 'styles/theme';

const MenuWrapper = styled.div`
  ${fixed};
  background-color: ${colors.black};

  .ui.menu.inverted {
    border-radius: 0;

    .logo.item {
      align-items: flex-start;
      padding-left: 1.14286em;
      margin-left: -1.14286em;
    }
  }
`;

const envLabelMap = {
  development: {
    color: 'red',
    tag: 'DEV',
  },
  test: {
    color: 'yellow',
    tag: 'TEST',
  },
  staging: {
    color: 'green',
    tag: 'STAGING',
  },
};

const AppHeader = ({identity, logout}) => {
  const envTag = envLabelMap[process.env.REACT_APP_ENVIRONMENT];
  return (
    <MenuWrapper>
      <Container>
        <Responsive {...RESPONSIVE_SIZES.maxTablet}>
          <Menu inverted fluid widths={2}>
            <Menu.Item as={Link} to="/dashboard" className="logo">
              {APP_NAME}
              <Label color={envTag.color}>{envTag.tag}</Label>
            </Menu.Item>
            <Dropdown item text="Examples">
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/example/form">
                  Form
                </Dropdown.Item>
                <Dropdown.Item href="https://github.com/justinobney/react-wallaby-starter/">
                  GitHub
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={() => logout()}>Log Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </Responsive>
        <Responsive {...RESPONSIVE_SIZES.minComputer}>
          <Menu inverted size="massive">
            <Menu.Item as={Link} to="/dashboard" className="logo">
              {APP_NAME}
              <Label color={envTag.color}>{envTag.tag}</Label>
            </Menu.Item>

            <Menu.Item as={NavLink} to="/dashboard">
              <Icon name="home" />
              Dashboard
            </Menu.Item>
            <Menu.Item href="https://github.com/justinobney/react-wallaby-starter/">
              <Icon name="github" />
              GitHub
            </Menu.Item>
            <Dropdown item text="Examples">
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/example/form">
                  Form
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Menu position="right">
              <Dropdown
                item
                text={`${identity.user.firstName} ${identity.user.lastName}`}
              >
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => logout()}>
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Menu>
          </Menu>
        </Responsive>
      </Container>
    </MenuWrapper>
  );
};

const mapStateToProps = state => {
  return {
    identity: state.identity,
  };
};

const WithActions = withActions({logout})(AppHeader);
export default withRouter(connect(mapStateToProps)(WithActions));
