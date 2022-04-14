import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import styles from './AuthForm.module.css';

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const location = useLocation();

  return (
    <form className={styles.authForm}>
      { location.pathname === '/login'
        ? <h1>Log In</h1>
        : <h1>Sign Up</h1>
      }
      <div className={styles.inputBlock}>
        <label htmlFor="email">Email:</label>
        <Input
          id="email"
          name="email"
          onChange={e => setEmail(e.target.value)}
          type="text"
          value={email}
        />
      </div>
      <div className={styles.inputBlock}>
        <label htmlFor="password">Password:</label>
        <Input
          id="password"
          name="password"
          onChange={e => setPassword(e.target.value)}
          type="password"
          value={password}
        />
      </div>
      { location.pathname === '/login'
        ? <Button type="submit">Log In</Button>
        : <Button type="submit">Sign Up</Button>
      }
    </form>
  );
}

export default AuthForm;
