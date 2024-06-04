// Profile.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dasboard';
import OrderHistory from '../components/OrderHistory';
import RecommendedProducts from '../components/RecommendedProducts';
import Pagedrawer from '../components/PageDrawer';
import './profile.css';

export default function Profile() {
  return (
    <Router>
      <div className="profile-container">
        <Sidebar />
        <div className="content-container">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/recommended-products" element={<RecommendedProducts />} />
            <Route path="/page-drawer" element={<Pagedrawer />} />
            {/* Add more routes as needed */}
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
