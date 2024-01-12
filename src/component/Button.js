// Button.js

import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onClick, color, textColor, children }) => {
  const buttonStyle = {
    backgroundColor: color,
    color: textColor,
  };

  return (
    <button className="custom-button" style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  color: '#3498db', // Default color: Blue
  textColor: '#ffffff', // Default text color: White
};

export default Button;
