import React from 'react';
import Input from '../../common/Input/Input';
import styles from './AuthForm.module.css';

const AuthForm = (props) => {
  return (
    <form className={styles.authForm}>
      <h1>{props.title}</h1>
      <div className={styles.inputBlock}>
        <label htmlFor="email">Email:</label>
        <Input
          id="email"
          name="email"
          onChange={props.handleChangeEmail}
          type="email"
          value={props.email}
        />
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="password">Password:</label>
        <Input
          id="password"
          name="password"
          onChange={props.handleChangePassword}
          type="password"
          value={props.password}
        />
      </div>
      {props.formSubmitButton}
      {props.message && <p className={styles.message}>{props.message}</p>}
    </form>
  );
}

export default AuthForm;
