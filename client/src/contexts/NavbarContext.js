import React, { useState, createContext } from 'react';

const NavbarContext = createContext();

const NavbarProvider = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <NavbarContext.Provider value={[isActive, setIsActive]}>
      {props.children}
    </NavbarContext.Provider>
  );
}

export { NavbarContext, NavbarProvider };
