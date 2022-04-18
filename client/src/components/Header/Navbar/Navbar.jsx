import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to='news'
        className={({ isActive }) =>
          isActive ? styles.activeLink : undefined
        }
      >
        News
      </NavLink>
      <NavLink
        to='gallery'
        className={({ isActive }) =>
          isActive ? styles.activeLink : undefined
        }
      >
        Gallery
      </NavLink>
      <NavLink
        to='shop'
        className={({ isActive }) =>
          isActive ? styles.activeLink : undefined
        }
      >
        Shop
      </NavLink>
    </nav>
  );
}

export default Navbar;
