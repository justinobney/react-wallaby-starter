import React from 'react';
import {render} from 'react-testing-library';
import {MemoryRouter} from 'react-router';
import {PrivateRoute} from './PrivateRoute';

const RouteComponent = () => <div />;

describe('Component: PrivateRoute', () => {
  it('should render component when user exists', () => {
    const {container} = render(
      <MemoryRouter initialEntries={['/app']} initialIndex={1}>
        <PrivateRoute path="/app" user={{}} component={RouteComponent} />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render null when user does not exist', () => {
    const {container} = render(
      <MemoryRouter initialEntries={['/app']} initialIndex={1}>
        <PrivateRoute path="/app" component={RouteComponent} />
      </MemoryRouter>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
