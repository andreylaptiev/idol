import React from 'react';
import styles from './Unauthorized.module.css';

const Unauthorized = () => {
  return (
    <div className={styles.unauth}>
      <h1 className={styles.unauth__title}>UNAUTHORIZED</h1>
      <p className={styles.unauth__message}>
        No access rigths to enter wishful page
      </p>
    </div>
  );
}

export default Unauthorized;
