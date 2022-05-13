import React, { createContext, useEffect, useState } from 'react';
import checkAuth from '../utils/checkAuth';

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth()
      .then(auth => setIsAuth(auth))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [isAuth]);

  const setAuthToFalse = () => setIsAuth(false);

  const setAuthToTrue = () => setIsAuth(true);

  return (
    <AuthContext.Provider value={{ isAuth, setAuthToFalse, setAuthToTrue }}>
      {!loading && props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
