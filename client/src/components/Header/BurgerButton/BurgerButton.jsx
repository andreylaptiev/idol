import React, { useContext } from 'react';
import { NavbarContext } from '../../../contexts/NavbarContext';
import styles from './BurgerButton.module.css';
const classNames = require('classnames');

const BurgerButton = () => {
  const [isActive, setIsActive] = useContext(NavbarContext);

  const handleClick = () => setIsActive(!isActive);

  let btnClass = classNames({
    [styles.burgerBtn]: true,
    [styles.burgerBtn_active]: isActive
  });

  return (
    <button onClick={handleClick} className={btnClass}>
      <img
        src={ (isActive) ? "./cross-icon.svg" : "./menu-icon.svg" }
        alt="menu button"
      />
    </button>
  );
}

export default BurgerButton;
