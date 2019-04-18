import React from 'react';
import Modal, { Header } from '../src';

const ModalWithOnClose = () => {
  const [isActive, setActive] = React.useState(true);

  const toggleModal = () => {
    setActive(!isActive);
  };

  return (
    <React.Fragment>
      <h1>
        Modal is:
        {' '}
        {isActive.toString()}
      </h1>
      <button type="button" onClick={toggleModal}>Open!</button>
      <Modal isActive={isActive} onClose={toggleModal}>
        <Header>
          <h2>Click outside of me!</h2>
        </Header>
      </Modal>
    </React.Fragment>
  );
};

export default ModalWithOnClose;
