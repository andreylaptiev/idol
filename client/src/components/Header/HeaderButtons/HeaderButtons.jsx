import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderButtons.module.css';

const HeaderButtons = () => {
  return (
    <div className={styles.headerBtns}>
      <Link className={styles.btn} to="signup">Sign Up</Link>
      <Link className={styles.btn} to="login">Log In</Link>
    </div>
  );
}

export default HeaderButtons;
