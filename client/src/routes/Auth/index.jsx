import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { defReq } from '../../axios/instances';
import AuthForm from '../../components/Forms/AuthForm/AuthForm';
import Button from '../../components/common/Button/Button';
import styles from './Auth.module.css';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // message from server displayed to user
  const [message, setMessage] = useState('');
  const {setIsAuth} = useAuth();

  const location = useLocation();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLogIn = async () => {
    try {
      // axios request to server with form data
      const res = await defReq.post('/users/login', { email, password });
      // extract message and jwt token from response data
      const { message, token } = res.data;
      // in case of successful request server sends token
      if (token) {
        localStorage.setItem('token', token);
        setIsAuth(true);
        setEmail('');
        setPassword('');
      }
      setMessage(message);
    } catch(err) {
      console.error(err);
    }
  }

  const handleSignUp = async () => {
    try {
      const res = await defReq.post('/users/signup', { email, password });
      const message = res.data.message;
      setMessage(message);
      setEmail('');
      setPassword('');
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    setMessage('');
  }, [location]);

  const title = (location.pathname === '/login') ? 'Log In' : 'Sign Up';
  const formSubmitButton = (location.pathname === '/login')
    ? <Button type="button" onClick={handleLogIn}>Log In</Button>
    : <Button type="button" onClick={handleSignUp}>Sign Up</Button>;

  return(
    <div className={styles.auth}>
      <AuthForm
        title={title}
        email={email}
        handleChangeEmail={handleChangeEmail}
        password={password}
        handleChangePassword={handleChangePassword}
        message={message}
        formSubmitButton={formSubmitButton}
      />
    </div>
  );
}

export default Auth;
