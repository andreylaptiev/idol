import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';
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
  const user = useUser();
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

  // burger button to manage navbar menu on small screens
  const burgerButton =
    <BurgerButton isActive={isActive} handleClick={handleClick} />;

  // set of header buttons depending on user authentication status and his role
  const headerButtons = isAuth
    ? user.role === 'admin'
      ? <>
          <HeaderButton to='admin' text='Admin Panel' />
          <HeaderButton onClick={logout} to={location.pathname} text='Log Out'/>
        </>
      : <>
          <HeaderButton to='profile/id' text='Profile' />
          <HeaderButton onClick={logout} to={location.pathname} text='Log Out'/>
        </>
    : <>
        <HeaderButton to='signup' text='Sign Up' />
        <HeaderButton to='login' text='Log In' />
      </>;

  // sign up, log in and other buttons
  // they are moved to mobile navbar on small screens
  const buttons = (windowWidth < 768) ? burgerButton : headerButtons;

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
          <div className={styles.header__buttons}>
            {buttons}
          </div>
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
