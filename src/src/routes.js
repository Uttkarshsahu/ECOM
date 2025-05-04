import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminDashboard from './admin/AdminDashboard';
import ProductList from './customer/ProductList';
import Cart from './customer/Cart';
import Orders from './customer/Orders';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminDashboard />} />

      {/* Customer Routes */}
      <Route path="/" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
