import React from 'react';
import PropTypes from 'prop-types';
import './main.css';

const Header = ({
  children,
  className,
}) => (
  <main className={`react-modable-modal-body${className ? ` ${className}` : ''}`}>
    { children }
  </main>
);

Header.defaultProps = {
  children: undefined,
  className: undefined,
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export default Header;
