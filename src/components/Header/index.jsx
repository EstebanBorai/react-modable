import React from 'react';
import PropTypes from 'prop-types';
import './header.css';

const Header = ({
  children,
  className,
  title,
}) => (
  <header className={`react-modable-modal-header${className ? ` ${className}` : ''}`}>
    { children || <h2>{title}</h2> }
  </header>
);

Header.defaultProps = {
  children: undefined,
  className: undefined,
  title: undefined,
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Header;
