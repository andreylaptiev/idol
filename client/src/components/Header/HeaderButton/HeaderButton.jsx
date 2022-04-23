import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeaderButton.module.css';

const HeaderButton = (props) => {
  return (
    <Link className={styles.linkBtn} onClick={props.onClick} to={props.to}>
      {props.text}
    </Link>
  );
}

export default HeaderButton;
