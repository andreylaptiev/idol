import { createContext, useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { decodeToken } from '../utils/checkAuth';

const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const { isAuth } = useAuth();
  // continue only after user being set
  const [initialLoading, setInitialLoading] = useState(true);

  // user context is set here at first render
  // and when auth status changes
  useEffect(() => {
    setUser(decodeToken());
    setInitialLoading(false);
  }, [isAuth]);

  return (
    <UserContext.Provider value={user}>
      {!initialLoading && props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
