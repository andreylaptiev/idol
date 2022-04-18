import React from 'react';
import useWindowWidth from '../../hooks/useWindowWidth';
import { NavbarProvider } from '../../contexts/NavbarContext';
import BurgerButton from './BurgerButton/BurgerButton';
import HeaderButtons from './HeaderButtons/HeaderButtons';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import NavbarMobile from './NavbarMobile/NavbarMobile';
import styles from './Header.module.css';

const Header = () => {
  const width = useWindowWidth();

  const button = (width < 768) ? <BurgerButton /> : <HeaderButtons />;

  return (
    <NavbarProvider>
      <>
        <header className={styles.header}>
          <div className={styles.header__inner}>
            <Logo>idol</Logo>
            {(width > 767) && <Navbar />}
            {button}
          </div>
        </header>
        {(width < 768) && <NavbarMobile />}
      </>
    </NavbarProvider>
  );
}

export default Header;
