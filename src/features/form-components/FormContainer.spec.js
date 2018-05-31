// import React from 'react';
import {create} from 'react-test-renderer';
import {createSerializer} from 'jest-emotion';
import * as emotion from 'emotion';

// import FormContainer from './FormContainer';
import {stories} from './FormContainer.stories';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('Component: FormContainer', () => {
  describe('Stories', () => {
    Object.keys(stories).map(story => {
      it(story, () => {
        const tree = create(stories[story]).toJSON(); // eslint-disable-line
        expect(tree).toMatchSnapshot();
      });
      return undefined;
    });
  });
});
