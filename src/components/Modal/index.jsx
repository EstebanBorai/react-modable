import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

const Modal = ({
  isActive,
  children,
  containerClassName,
  bodyClassName,
  onClose,
}) => {
  let containerRef;

  const setWrapperRef = (node) => {
    containerRef = node;
  };

  const handleClose = (event) => {
    if (event.type === 'mousedown') {
      if (containerRef && !containerRef.contains(event.target)) {
        onClose();
      }
    }

    if (event.type === 'keydown' && event.keyCode === 27) {
      onClose();
    }
  };

  if (onClose) {
    React.useEffect(() => {
      console.log('MOUNTED');
      document.addEventListener('mousedown', event => handleClose(event));
      document.addEventListener('keydown', event => handleClose(event));

      return () => {
        document.removeEventListener('mousedown', event => handleClose(event));
        document.removeEventListener('keydown', event => handleClose(event));
      };
    });
  }

  const finalContainerClassNames = `react-modable-modal-container${containerClassName ? ` ${containerClassName}` : ''}`;
  const finalBodyClassNames = `react-modable-modal-body${bodyClassName ? ` ${bodyClassName}` : ''}`;

  if (isActive) {
    return (
      <section className={finalContainerClassNames}>
        <div className={finalBodyClassNames} ref={setWrapperRef}>
          {children}
        </div>
      </section>
    );
  }

  return null;
};

Modal.defaultProps = {
  isActive: false,
  containerClassName: undefined,
  bodyClassName: undefined,
  onClose: undefined,
};

Modal.propTypes = {
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  containerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;
