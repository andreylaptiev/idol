import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useUser from '../hooks/useUser';

const AdminRoute = () => {
  const {isAuth} = useAuth();
  const user = useUser();

  return (
    user.role === 'admin'
      ? <Outlet />
      : isAuth
        ? <Navigate to="unauthorized" replace={true} />
        : <Navigate to="login" replace={true} />
  );
}

export default AdminRoute;
