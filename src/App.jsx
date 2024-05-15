import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../src/Layout/layout";
import Dashboard from "./Pages/DashBoard/";
import OrderForm from "./Pages/OrderForm-OM/OrderForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/orderForm" element={<OrderForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
