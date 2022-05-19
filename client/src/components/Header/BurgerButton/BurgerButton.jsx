import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import crossIcon from '../../../assets/icons/cross-icon.svg';
import menuIcon from '../../../assets/icons/menu-icon.svg';
import styles from './BurgerButton.module.css';

const BurgerButton = (props) => {
  // burger button styles
  let btnClass = classNames({
    [styles.burgerBtn]: true,
    [styles.burgerBtn_active]: props.isActive
  });

  return (
    <button className={btnClass} type="button" onClick={props.handleClick}>
      <img
        src={props.isActive ? crossIcon : menuIcon}
        alt="menu button"
      />
    </button>
  );
}

BurgerButton.propTypes = exact({
  handleClick: PropTypes.func,
  isActive: PropTypes.bool
});

export default BurgerButton;
