import React from 'react';
import {render} from 'react-testing-library';
import {RequiresClaim} from './RequiresClaim';

const ChildComponent = () => <div>Child Component</div>;

describe('Component: RequiresClaim', () => {
  it('should render component when user has claim', () => {
    const {container} = render(
      <RequiresClaim claim="users/modify" claims={['users/modify']}>
        Testing
      </RequiresClaim>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render null when user does not have claim', () => {
    const {container} = render(
      <RequiresClaim
        claim="users/modify"
        claims={[]}
        render={() => <ChildComponent />}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
