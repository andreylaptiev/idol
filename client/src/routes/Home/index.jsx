import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavbarProvider } from '../../contexts/NavbarContext';
import Header from '../../components/Header/Header';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.app}>
      <NavbarProvider>
        <Header />
      </NavbarProvider>
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
