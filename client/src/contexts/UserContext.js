import { createContext, useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { decodeToken } from '../utils/checkAuth';

const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const { isAuth } = useAuth();

  // user context is set here when auth status changes
  useEffect(() => {
    setUser(decodeToken());
  }, [isAuth]);

  return (
    <UserContext.Provider value={user}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
