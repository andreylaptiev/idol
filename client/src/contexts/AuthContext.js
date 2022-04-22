import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContext.Provider value={[isAuth, setIsAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
