import React from 'react';
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
        src={ (props.isActive) ? "./cross-icon.svg" : "./menu-icon.svg" }
        alt="menu button"
      />
    </button>
  );
}

export default BurgerButton;
