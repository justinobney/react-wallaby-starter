import React from 'react';
import {create} from 'react-test-renderer';
import {RequiresClaim} from './RequiresClaim';

const ChildComponent = () => <div>Child Component</div>;

describe('Component: RequiresClaim', () => {
  it('should render component when user has claim', () => {
    const tree = create(
      <RequiresClaim claim="users/modify" claims={['users/modify']}>
        Testing
      </RequiresClaim>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render null when user does not have claim', () => {
    const tree = create(
      <RequiresClaim
        claim="users/modify"
        claims={[]}
        render={() => <ChildComponent />}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
