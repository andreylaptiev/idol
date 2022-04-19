import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
// public routes
import Auth from './Auth';
import Gallery from './Gallery';
import News from './News';
import Shop from './Shop';
// admin panel routes
import Admin from './Admin';
import AdminArticles from './Admin/AdminArticles'
import AdminGallery from './Admin/AdminGallery'
import AdminProducts from './Admin/AdminProducts'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="news" element={<News />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Auth />} />
        <Route path="signup" element={<Auth />} />
        <Route path="admin" element={<Admin />}>
          <Route path="articles" element={<AdminArticles />} />
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;
