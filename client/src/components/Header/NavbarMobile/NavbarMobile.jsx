import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import styles from './NavbarMobile.module.css';

const NavbarMobile = (props) => {
  return (
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
      ))}
      {props.headerButtons}
    </nav>
  );
}

NavbarMobile.propTypes = exact({
  handleClick: PropTypes.func,
  headerButtons: PropTypes.element,
  links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
});

export default NavbarMobile;
