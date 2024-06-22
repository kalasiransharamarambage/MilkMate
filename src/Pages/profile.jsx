// Profile.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/sidebar.jsx';
import Dashboard from './Components/Dasboard.jsx';
import OrderHistory from './Components/OrderHistory.jsx';
import RecommendedProducts from './Components/RecommendedProducts.jsx';
import Pagedrawer from './Components/PageDrawer.jsx';
import './profile.css';


export default function Profile() {
  return (
   
    <div className="profile-container">
    <Sidebar />
    <div className="content-container">
      <div className="main-content">
       <Dashboard/>
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
