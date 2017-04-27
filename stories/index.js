import React from 'react';
import {storiesOf, linkTo} from '@kadira/storybook';
import Welcome from './Welcome';

import 'semantic-ui-css/semantic.css';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));
