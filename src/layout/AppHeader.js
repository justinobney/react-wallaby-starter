/** @jsx createElement */
import {createElement} from 'react';
import {withRouter} from 'react-router';
import {Link, NavLink} from 'react-router-dom';
import {Icon, Menu} from 'semantic-ui-react';
import {connect} from 'react-redux';
import glamorous from 'glamorous';
import {colors} from '../styles';
import {APP_NAME} from 'constants';

const MenuWrapper = glamorous(Menu)({
  borderRadius: 0,
  borderBottom: `solid 5px ${colors.brandPrimary}`,
});

const MenuTitle = glamorous.span({
  fontSize: 18,
  marginLeft: 10,
});

const AppHeader = ({identity}) => (
  <MenuWrapper inverted fixed="top">
    <Menu.Item as={Link} to="/dashboard">
      <MenuTitle>{APP_NAME}</MenuTitle>
    </Menu.Item>

    <Menu.Item as={NavLink} to="/dashboard">
      Dashboard
    </Menu.Item>

    {identity.user &&
      <Menu.Menu position="right">
        <Menu.Item>
          {`${identity.user.firstName} ${identity.user.lastName}`}
        </Menu.Item>
      </Menu.Menu>}

    {!identity.user &&
      <Menu.Menu position="right">
        <Menu.Item as={NavLink} to="/auth/login">
          <Icon name="lock" />
          Log In
        </Menu.Item>
      </Menu.Menu>}
  </MenuWrapper>
);

const mapStateToProps = state => {
  return {
    identity: state.identity,
  };
};

export default withRouter(connect(mapStateToProps)(AppHeader));
