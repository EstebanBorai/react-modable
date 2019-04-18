import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from '../src/index';

storiesOf('Text', module)
  .add('with text', () => (
    <Text />
  ))
