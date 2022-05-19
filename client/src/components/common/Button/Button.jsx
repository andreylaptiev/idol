import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import styles from './Button.module.css';

const Button = ({ children, onClick, type, ...props }) => {
  return (
    <button {...props} className={styles.btn} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = exact({
  type: PropTypes.string.isRequired,
  children: PropTypes.string,
  onClick: PropTypes.func
});

export default Button;
