import React from 'react';
import Modal, { Header, Main } from '../src';

const ModalWithBody = () => (
  <Modal isActive>
    <Header title="Modal with Body" />
    <Main>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam eum, obcaecati
      provident ipsa possimus sed placeat hic velit! Itaque corrupti neque perspiciatis ex,
      ipsum architecto provident ipsa repellendus quam sint!
    </Main>
  </Modal>
);

export default ModalWithBody;
