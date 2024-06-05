// Profile.js
import React from 'react';
import Sidebar from '../Components/Sidebar';
import Dashboard from '../Components/Dasboard';
import OrderHistory from '../Components/OrderHistory';
import RecommendedProducts from '../Components/RecommendedProducts';
import Pagedrawer from '../Components/PageDrawer';
import './profile.css'

export default function Profile() {
  return (
   
    <div className="profile-container">
    <Sidebar />
    <div className="content-container">
      <div className="main-content">
        <Dashboard />
        <OrderHistory />
        <RecommendedProducts />
      </div>
      <div className="drawer-container">
        <Pagedrawer />
      </div>
    </div>
  </div>
  );
}
