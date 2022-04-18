import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

function Logo(props) {
  return(
    <Link to="/">
      <h1 className={styles.logo}>{props.children}</h1>
    </Link>
  )
}

export default Logo;
