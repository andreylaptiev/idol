import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import styles from './Logo.module.css';

const Logo = (props) => {
  return (
    <Link to="/">
      <h1 className={styles.logo}>{props.children}</h1>
    </Link>
  )
}

Logo.propTypes = exact({
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
});

export default Logo;
