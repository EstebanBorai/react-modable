import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from '../src';

const handleOnClose = () => console.log('Closed');

storiesOf('Basic Modal', module)
  .add('Basic Modal', () => (
    <Modal title="Test" onClose={handleOnClose}>
      Hello
    </Modal>
  ));
