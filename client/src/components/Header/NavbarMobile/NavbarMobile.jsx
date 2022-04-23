import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavbarMobile.module.css';

const NavbarMobile = (props) => {
  return (
    (props.isActive) &&
      <nav onClick={props.handleClick} className={styles.navbarMobile}>
        {props.links.map(link => (
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
        {props.headerButtons}
      </nav>
  );
}

export default NavbarMobile;
