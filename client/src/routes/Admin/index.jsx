import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Header/Navbar/Navbar';
import styles from './Admin.module.css';

const Admin = () => {
  const links = [
    {to: 'articles', text: 'Articles'},
    {to: 'gallery', text: 'Gallery'},
    {to: 'products', text: 'Products'}
  ];

  return (
    <div className={styles.admin}>
      <nav className={styles.adminNavbar}>
        <Navbar links={links} />
      </nav>
      <Outlet />
    </div>
  );
}

export default Admin;
