import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

const Modal = ({
  children,
  containerClassName,
  bodyClassName,
}) => {
  const finalContainerClassNames = `react-modable-modal-container${containerClassName ? ` ${containerClassName}` : ''}`;
  const finalBodyClassNames = `react-modable-modal-body${bodyClassName ? ` ${bodyClassName}` : ''}`;

  return (
    <section className={finalContainerClassNames}>
      <div className={finalBodyClassNames}>
        {children}
      </div>
    </section>
  );
};

Modal.defaultProps = {
  containerClassName: '',
  bodyClassName: '',
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
};

export default Modal;
