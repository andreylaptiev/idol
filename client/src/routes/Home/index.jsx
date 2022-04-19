import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
