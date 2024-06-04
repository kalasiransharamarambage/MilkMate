import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../src/Layout/layout";
import Dashboard from "./Pages/Dashboard-OM/Dashboard";
import OrderForm from "./Pages/OrderForm-OM/OrderForm";
import CardDetails from "./Pages/CardDetails-OM/CardDetails";
import Yogurt from "./Pages/Yogurt-OM/yogurt";
import MyCart from "./Pages/MyCart-OM/mycart";
import SellerLogin from "./Pages/SellerLogin/SellerLogin.jsx";
import SellerHome from "./Pages/SellerHome/SellerHome.jsx";
import SellerAddProducts from "./Pages/SellerAddProducts/SellerAddProducts.jsx";
import Sellerallproducts from "./Pages/AllProducts/AllProducts.jsx";
import Sellerpayment from "./Pages/SellerPayment/SellerPayment.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/orderForm" element={<OrderForm />} />
          <Route path="/carddetails" element={<CardDetails />} />
          <Route path="/yogurt" element={<Yogurt />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="/sellerlogin" element={<SellerLogin />} />
          <Route path="/sellerhome" element={<SellerHome />} />
          <Route path="/selleraddproducts" element={<SellerAddProducts />} />
          <Route path="/sellerallproducts" element={<Sellerallproducts />} />
          <Route path="/sellerpayment" element={<Sellerpayment />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
