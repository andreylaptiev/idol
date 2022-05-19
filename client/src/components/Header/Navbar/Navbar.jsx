import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
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

Navbar.propTypes = exact({
  links: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
});

export default Navbar;
