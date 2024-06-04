import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../src/Layout/layout";
import Dashboard from "./Pages/DashBoard/Dashboard";
import MainForm from "./Pages/Construction/MainForm";
import CowParent from "./Pages/Construction/CowParent";
import GoatParent from "./Pages/Construction/GoatParent";
import CChildDisplay from "./Pages/Construction/CChildDisplay";
import CParentDisplay from "./Pages/Construction/CParentDisplay";
import GParentDisplay from "./Pages/Construction/GParentDisplay";
import GChildDisplay from "./Pages/Construction/GChildDisplay";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Dashboard />} />
          <Route path="/mainform" element= {<MainForm/>}/> 
        <Route path="/cowparent" element= {<CowParent/>}/> 
        <Route path="/goatparent" element= {<GoatParent/>}/> 
        <Route path="/cchilddisplay" element= {<CChildDisplay/>}/> 
        <Route path="/cparentdisplay" element= {<CParentDisplay/>}/>
        <Route path="/gchilddisplay" element= {<GChildDisplay/>}/> 
        <Route path="/gparentdisplay" element= {<GParentDisplay/>}/>    
        

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
