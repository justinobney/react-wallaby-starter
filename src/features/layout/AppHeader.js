import React from 'react';
import {withRouter} from 'react-router';
import {Link, NavLink} from 'react-router-dom';
import {Container, Dropdown, Icon, Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {withActions} from 'actionware';

import {logout} from 'store/identity';
import {fixed} from 'styles';
import {APP_NAME} from 'constants.js';

const MenuWrapper = styled.div`
  ${fixed};
  background: #1b1c1d;

  .ui.menu.inverted {
    border-radius: 0;

    .logo.item {
      align-items: flex-start;
      padding-left: 0;
    }
  }
`;

const MenuTitle = styled.span`font-size: 18px;`;

const AppHeader = ({identity, logout}) => (
  <MenuWrapper>
    <Container>
      <Menu inverted size="massive">
        <Menu.Item as={Link} to="/dashboard" className="logo">
          <MenuTitle>{APP_NAME}</MenuTitle>
        </Menu.Item>

        <Menu.Item as={NavLink} to="/dashboard">
          <Icon name="home" />
          Dashboard
        </Menu.Item>

        <Menu.Menu position="right">
          <Dropdown item text="Examples">
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to="/example/form">
                Form
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown
            item
            text={`${identity.user.firstName} ${identity.user.lastName}`}
          >
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => logout()}>Log Out</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    </Container>
  </MenuWrapper>
);

const mapStateToProps = state => {
  return {
    identity: state.identity,
  };
};

const WithActions = withActions({logout})(AppHeader);
export default withRouter(connect(mapStateToProps)(WithActions));
