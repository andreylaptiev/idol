import { createContext, useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { decodeToken } from '../utils/checkAuth';

const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const { isAuth } = useAuth();
  // continue only after user being set
  const [loading, setLoading] = useState(true);

  // user context is set here at first render
  // and when auth status changes
  useEffect(() => {
    setUser(decodeToken());
    setLoading(false);
  }, [isAuth]);

  return (
    <UserContext.Provider value={user}>
      {!loading && props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
