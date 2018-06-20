import React from 'react';
import {storiesOf} from '@storybook/react';
import {Form} from 'semantic-ui-react';

import FormContainer from './FormContainer';

storiesOf('FormContainer', module)
  .add('Default render', () => <FormContainer>Some Content</FormContainer>)
  .add('Loading', () => (
    <FormContainer loading>My content is dimmed</FormContainer>
  ))
  .add('Loading Message', () => (
    <FormContainer loading loadingMessage="Custom Loading Message">
      My content is dimmed
    </FormContainer>
  ))
  .add('Passes Extra Props', () => (
    <FormContainer as={Form}>Some Content</FormContainer>
  ));
