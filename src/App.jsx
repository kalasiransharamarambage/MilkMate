import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../src/Layout/layout";
import Dashboard from "./Pages/DashBoard/Dashboard";
import Delivery2 from "./Pages/Delivery2/Delivery2";
import Delivery3 from "./Pages/Delivery3/Delivery3";
import Delivery4 from "./Pages/Delivery4/Delivery4";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/delivery2" element={<Delivery2 />} />
          <Route path="/delivery3" element={<Delivery3 />} />
          <Route path="/delivery4" element={<Delivery4 />} />
          
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
