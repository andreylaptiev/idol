import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = (props) => {
  return (
    <nav className={styles.navbar}>
      { props.links.map(link => (
        <NavLink
          key={link.text}
          to={link.to}
          className={({ isActive }) =>
            isActive ? styles.activeLink : undefined
          }
        >
          {link.text}
        </NavLink>
        ))
      }
    </nav>
  );
}

export default Navbar;
