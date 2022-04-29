import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useWindowWidth from '../../hooks/useWindowWidth';
import { NavbarContext } from '../../contexts/NavbarContext';
import BurgerButton from './BurgerButton/BurgerButton';
import HeaderButton from './HeaderButton/HeaderButton';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import NavbarMobile from './NavbarMobile/NavbarMobile';
import styles from './Header.module.css';

const Header = () => {
  const windowWidth = useWindowWidth();
  const {isAuth, setIsAuth} = useAuth();
  const [isActive, setIsActive] = useContext(NavbarContext);

  const location = useLocation();

  // handle mobile navbar status
  const handleClick = () => setIsActive(!isActive);

  // handle user log out
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setIsAuth(false);
  }

  // set of header buttons depending whether user is authenticated
  const headerButtons = isAuth
    ? <div className={styles.header__buttons}>
        <HeaderButton to='profile/id' text='Profile' />
        <HeaderButton onClick={logout} to={location.pathname} text='Log Out' />
      </div>
    : <div className={styles.header__buttons}>
        <HeaderButton to='signup' text='Sign Up' />
        <HeaderButton to='login' text='Log In' />
      </div>

  // sign up, log in and other buttons
  // they are moved to mobile navbar on small screens
  const buttons = (windowWidth < 768)
    ? <BurgerButton isActive={isActive} handleClick={handleClick}/>
    : headerButtons;

  // navbar links
  const links = [
    {to: 'news', text: 'News'},
    {to: 'gallery', text: 'Gallery'},
    {to: 'shop', text: 'Shop'}
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__inner}>
          <Logo>idol</Logo>
          {(windowWidth > 767) && <Navbar links={links} />}
          {buttons}
        </div>
      </header>
      {(windowWidth < 768) &&
        <NavbarMobile
          headerButtons={headerButtons}
          handleClick={handleClick}
          isActive={isActive}
          links={links}
        />
      }
    </>
  );
}

export default Header;
