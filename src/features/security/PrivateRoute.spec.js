import React from 'react';
import {create} from 'react-test-renderer';
import {MemoryRouter} from 'react-router';
import {PrivateRoute} from './PrivateRoute';

const RouteComponent = () => <div />;

describe('Component: PrivateRoute', () => {
  it('should render component when user exists', () => {
    const tree = create(
      <MemoryRouter initialEntries={['/app']} initialIndex={1}>
        <PrivateRoute path="/app" user={{}} component={RouteComponent} />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render null when user does not exist', () => {
    const tree = create(
      <MemoryRouter initialEntries={['/app']} initialIndex={1}>
        <PrivateRoute
          claim="users/modify"
          path="/app"
          claims={[]}
          component={RouteComponent}
        />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
