import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../src/Layout/layout";
import Dashboard from "./Pages/Dashboard-OM/Dashboard";
import OrderForm from "./Pages/OrderForm-OM/OrderForm";
import CardDetails from "./Pages/CardDetails-OM/CardDetails";
import Yogurt from "./Pages/Yogurt-OM/yogurt";
import MyCart from "./Pages/MyCart-OM/mycart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/orderForm" element={<OrderForm />} />
          <Route path="/carddetails" element={<CardDetails />} />
          <Route path="/yogurt" element={< Yogurt/>} />
          <Route path="/mycart" element={< MyCart/>} />     
        </Route>
      </Routes>
    </Router>
  );
}

export default App;