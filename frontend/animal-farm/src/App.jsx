import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './components/Admin';
import User from './components/User';

const App = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      <Route path="/" element={<User />} />
    </Routes>
  );
};

export default App;
