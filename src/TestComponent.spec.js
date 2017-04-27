import React from 'react';
import {create} from 'react-test-renderer';

const TestComponent = ({test}) => <div>{test}</div>;

describe('Component: TestComponent', () => {
  xit('sample test', () => {
    const tree = create(<TestComponent test="foo" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
