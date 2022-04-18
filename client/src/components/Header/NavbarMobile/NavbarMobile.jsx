import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarContext } from '../../../contexts/NavbarContext';
import HeaderButtons from '../HeaderButtons/HeaderButtons';
import styles from './NavbarMobile.module.css';

const NavbarMobile = () => {
  const [isActive, setIsActive] = useContext(NavbarContext);

  const handleClick = () => setIsActive(false);

  return (
    (isActive) &&
    <nav onClick={handleClick} className={styles.navbarMobile}>
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
      <HeaderButtons />
    </nav>
  );
}

export default NavbarMobile;
