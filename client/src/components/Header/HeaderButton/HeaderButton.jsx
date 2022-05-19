import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import exact from 'prop-types-exact';
import styles from './HeaderButton.module.css';

const HeaderButton = (props) => {
  return (
    <Link className={styles.linkBtn} onClick={props.onClick} to={props.to}>
      {props.text}
    </Link>
  );
}

HeaderButton.propTypes = exact({
  text: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func
})

export default HeaderButton;
