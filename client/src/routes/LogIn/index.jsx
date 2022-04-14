import React from 'react';
import LogInForm from '../../components/Forms/LogInForm/LogInForm'
import styles from './LogIn.module.css'

function LogIn() {
  return(
    <div className={styles.logIn}>
      <LogInForm />
    </div>
  );
}

export default LogIn;
