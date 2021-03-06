import React from 'react';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import Input from '../../common/Input/Input';
import styles from './AuthForm.module.css';

const AuthForm = (props) => {
  return (
    <form
      className={styles.authForm}
      name={props.title === 'Log In' ? 'loginForm' : 'signupForm'}
    >
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

AuthForm.propTypes = exact({
  formSubmitButton: PropTypes.element.isRequired,
  handleChangeEmail: PropTypes.func.isRequired,
  handleChangePassword: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string,
  message: PropTypes.string,
  password: PropTypes.string,
});

export default AuthForm;
