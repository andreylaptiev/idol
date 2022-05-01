import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import { AuthProvider } from './contexts/AuthContext';
import { UserProvider } from './contexts/UserContext';

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
