import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Form} from 'semantic-ui-react';

import FormContainer from './FormContainer';

export const stories = {
  Default: <FormContainer>Some Content</FormContainer>,
  Loading: <FormContainer loading>My content is dimmed</FormContainer>,
  'Loading Message': (
    <FormContainer loading loadingMessage="Custom Loading Message">
      My content is dimmed
    </FormContainer>
  ),
  'Passes Extra Props': <FormContainer as={Form}>Some Content</FormContainer>,
};

Object.keys(stories).map(story => {
  storiesOf('FormContainer', module).add(
    story,
    withInfo()(() => stories[story])
  );
  return undefined;
});
