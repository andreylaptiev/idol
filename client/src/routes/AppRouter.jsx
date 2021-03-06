import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
// public routes
import Auth from './Auth';
import Gallery from './Gallery';
import Layout from './Layout';
import News from './News';
import Shop from './Shop';
import Unauthorized from './Unauthorized';
// checks user role before entering admin panel
import AdminRoute from './AdminRoute';
// admin panel routes
import Admin from './Admin';
import AdminArticles from './Admin/AdminArticles';
import AdminGallery from './Admin/AdminGallery';
import AdminProducts from './Admin/AdminProducts';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Auth />} />
        <Route path="signup" element={<Auth />} />
        <Route element={<AdminRoute />}>
          <Route path="admin" element={<Admin />}>
            <Route path="articles" element={<AdminArticles />} />
            <Route path="gallery" element={<AdminGallery />} />
            <Route path="products" element={<AdminProducts />} />
          </Route>
        </Route>
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
