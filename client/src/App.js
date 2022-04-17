import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <div className='main'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
