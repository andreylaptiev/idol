import React from 'react';
import AuthForm from '../../components/Forms/AuthForm/AuthForm';
import styles from './Auth.module.css';

function Auth() {
  return(
    <div className={styles.auth}>
      <AuthForm />
    </div>
  );
}

export default Auth;
