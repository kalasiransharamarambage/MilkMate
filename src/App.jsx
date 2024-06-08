import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../src/Layout/layout";
import Dashboard from "./Pages/Dashboard-OM/Dashboard";
import OrderForm from "./Pages/OrderForm-OM/OrderForm";
import CardDetails from "./Pages/CardDetails-OM/CardDetails";
import Yogurt from "./Pages/Yogurt-OM/yogurt";
import MyCart from "./Pages/MyCart-OM/mycart";
import Help from "./Pages/Help-OM/Help";
import SellerLogin from "./Pages/SellerLogin/SellerLogin.jsx";
import SellerHome from "./Pages/SellerHome/SellerHome.jsx";
import SellerAddProducts from "./Pages/SellerAddProducts/SellerAddProducts.jsx";
import Sellerallproducts from "./Pages/AllProducts/AllProducts.jsx";
import Sellerpayment from "./Pages/SellerPayment/SellerPayment.jsx";
import Delivery1 from "./Pages/Delivery1/Delivery1";
import Delivery3 from "./Pages/Delivery3/Delivery3";
import Delivery4 from "./Pages/Delivery4/Delivery4";
import AddAnimal from "./Pages/AnimalDetails/AddAnimal.jsx";
import Animal from "./Pages/AnimalDetails/Animal.jsx";
import Animal2 from "./Pages/AnimalDetails/Animal2.jsx";
import AnimalProfile from "./Pages/AnimalDetails/AnimalProfile.jsx";
import Search from "./Pages/AnimalDetails/Search.jsx";
import Mainform from "./Pages/Construction/MainForm.jsx";
import Cowparent from "./Pages/Construction/CowParent.jsx";
import Goatparent from "./Pages/Construction/GoatParent.jsx";
import CChildDisplay from "./Pages/Construction/CChildDisplay.jsx";
import CParentDisplay from "./Pages/Construction/CParentDisplay.jsx";
import GChildDisplay from "./Pages/Construction/GChildDisplay.jsx"
import GParentDisplay from "./Pages/Construction/GParentDisplay.jsx"
import RegisterForm from "./Pages/register-form.jsx"
import Register from "./Pages/register.jsx"
import Profile from "./Pages/profile.jsx"
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import AdminLogin from "./Pages/admin-login.jsx";
import UserManagement from "./Pages/UserManagement/UserManagement.jsx";
import SellerRegistration from "./Pages/SellerRegistration/SellerRegistration.jsx";





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
          <Route path="/help" element={<Help />} />
          <Route path="/sellerlogin" element={<SellerLogin />} />
          <Route path="/sellerhome" element={<SellerHome />} />
          <Route path="/selleraddproducts" element={<SellerAddProducts />} />
          <Route path="/sellerallproducts" element={<Sellerallproducts />} />
          <Route path="/sellerpayment" element={<Sellerpayment />} />
          <Route path="/delivery1" element={<Delivery1 />} />
          <Route path="/delivery3" element={<Delivery3 />} />
          <Route path="/delivery4" element={<Delivery4 />} />
          <Route path="/addanimal" element={<AddAnimal/>} />
          <Route path="/animal" element={<Animal />} />
          <Route path="/animal2" element={<Animal2/>} />
          <Route path="/animalprofile" element={<AnimalProfile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/mainform" element= {<Mainform/>}/> 
        <Route path="/cowparent" element= {<Cowparent/>}/> 
        <Route path="/goatparent" element= {<Goatparent/>}/> 
        <Route path="/cchilddisplay" element= {<CChildDisplay/>}/> 
        <Route path="/cparentdisplay" element= {<CParentDisplay/>}/>
        <Route path="/gchilddisplay" element= {<GChildDisplay/>}/> 
        <Route path="/gparentdisplay" element= {<GParentDisplay/>}/> 
        <Route path="/registerform" element= {<RegisterForm/>}/>    
        <Route path="/register" element= {<Register/>}/>   
        <Route path="/admindashboard" element= {<AdminDashboard/>}/> 
        <Route path="/adminlogin" element= {<AdminLogin/>}/> 
        <Route path="/usermanagement" element= {<UserManagement/>}/>
        <Route path="/sellerregistration" element= {<SellerRegistration/>}/> 


        
       
        </Route>
          
        <Route path="/profile" element= {<Profile/>}/>      


      </Routes>
    </Router>
  );
}
export default App;