// Navbar.js

import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import Button from './Button';

const Navbar = ({ bgColor, textColor, links,onThemeToggle }) => {
  const navbarStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <nav className="custom-navbar" style={navbarStyle}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>

      <Button onClick={onThemeToggle} color="#e74c3c" textColor="#ffffff">
        Toggle Theme
      </Button>
    </nav>
  );
};

Navbar.propTypes = {
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
    onThemeToggle: PropTypes.func.isRequired,
  };

Navbar.defaultProps = {
  bgColor: '#2c3e50', // Default background color: Dark blue
  textColor: '#ecf0f1', // Default text color: Light gray
};

export default Navbar;
