import React, { createContext, useEffect, useState } from 'react';
import checkAuth from '../utils/checkAuth';

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    checkAuth()
      .then(auth => setIsAuth(auth));
  }, []);

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
