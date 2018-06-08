import {render} from 'react-testing-library';
import {createSerializer} from 'jest-emotion';
import * as emotion from 'emotion';

import {stories} from './FormContainer.stories';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('Component: FormContainer', () => {
  describe('Stories', () => {
    Object.keys(stories).map(story => {
      it(story, () => {
        const {container} = render(stories[story]); // eslint-disable-line
        expect(container.firstChild).toMatchSnapshot();
      });
      return undefined;
    });
  });
});
