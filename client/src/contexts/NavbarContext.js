import React, { useState, createContext } from 'react';

const NavbarContext = createContext();

const NavbarProvider = (props) => {
  const [isActive, setIsActive] = useState(false);

  const triggerNavbar = () => setIsActive(!isActive);

  return (
    <NavbarContext.Provider value={{ isActive, triggerNavbar }}>
      {props.children}
    </NavbarContext.Provider>
  );
}

export { NavbarContext, NavbarProvider };
