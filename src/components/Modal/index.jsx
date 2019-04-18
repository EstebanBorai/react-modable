import React from 'react';
import PropTypes from 'prop-types';
import {
  modalContainer, modalHeader, modalTitle, modalBody,
} from './styles';

const Modal = ({ title, children }) => (
  <section style={modalContainer}>
    <div style={modalBody}>
      <header style={modalHeader}>
        <h2 style={modalTitle}>{title}</h2>
      </header>
      <main>
        {children}
      </main>
    </div>
  </section>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Modal;
