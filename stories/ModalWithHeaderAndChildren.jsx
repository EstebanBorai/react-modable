import React from 'react';
import Modal, { Header } from '../src';

const ModalWithHeaderAndChildren = () => {
  const [isActive, setActive] = React.useState(true);

  const toggleModal = () => {
    setActive(!isActive);
  };

  return (
    <React.Fragment>
      <button type="button" onClick={toggleModal}>Open!</button>
      <Modal isActive={isActive}>
        <Header>
          <h2>Umm! Lets close this!</h2>
          <button type="button" onClick={toggleModal}>Close!</button>
        </Header>
      </Modal>
    </React.Fragment>
  );
};

export default ModalWithHeaderAndChildren;
