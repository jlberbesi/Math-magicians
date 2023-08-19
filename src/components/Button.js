import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './Button.css';

function Button({
  special,
  doubleWidth,
  onClick,
  label,
}) {
  return (
    <button
      type="button"
      className={`button ${special ? 'special' : ''} ${doubleWidth ? 'double-width' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  special: PropTypes.bool,
  doubleWidth: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

Button.defaultProps = {
  special: false,
  doubleWidth: false,
};

export default Button;
