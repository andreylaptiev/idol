import React from 'react';
import crossIcon from '../../../assets/icons/cross-icon.svg';
import menuIcon from '../../../assets/icons/menu-icon.svg';
import styles from './BurgerButton.module.css';
const classNames = require('classnames');

const BurgerButton = (props) => {
  // burger button styles
  let btnClass = classNames({
    [styles.burgerBtn]: true,
    [styles.burgerBtn_active]: props.isActive
  });

  return (
    <button onClick={props.handleClick} className={btnClass}>
      <img
        src={props.isActive ? crossIcon : menuIcon}
        alt="menu button"
      />
    </button>
  );
}

export default BurgerButton;
