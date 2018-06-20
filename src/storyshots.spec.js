import * as emotion from 'emotion';
import {createSerializer} from 'jest-emotion';
import initStoryshots from '@storybook/addon-storyshots';

expect.addSnapshotSerializer(createSerializer(emotion));

initStoryshots();
