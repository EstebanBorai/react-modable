import React from 'react';
import { storiesOf } from '@storybook/react';
import Modal, { Header } from '../src';
import ModalWithHeaderAndChildren from './ModalWithHeaderAndChildren';
import ModalWithOnClose from './ModalWithOnClose';

storiesOf('Modal', module)
  .add('Basic Modal', () => (
    <Modal isActive>
      Hello
    </Modal>
  ))
  .add('Modal with Header & Title', () => (
    <Modal isActive>
      <Header title="Wow this looks ugly!" />
    </Modal>
  ))
  .add('Modal with Header & Children', () => <ModalWithHeaderAndChildren />)
  .add('Modal with onClose', () => <ModalWithOnClose />);
