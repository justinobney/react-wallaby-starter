import React from 'react';

import {storiesOf} from '@storybook/react';
// import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';
import {withInfo} from '@storybook/addon-info';

import {Welcome} from '@storybook/react/demo';
import FormContainer from '../features/form-components/FormContainer';
import '../styles/imports';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('FormContainer')} />
));

storiesOf('FormContainer', module)
  .add(
    'Default',
    withInfo('Given only children')(() => (
      <FormContainer>Some Content</FormContainer>
    ))
  )
  .add(
    'Loading',
    withInfo('Dim the content by passing a loading property')(() => (
      <FormContainer loading>My content is dimmed</FormContainer>
    ))
  );
