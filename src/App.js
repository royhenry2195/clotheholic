import "./App.css";
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Homepage from "./containers/homepage/Homepage";
import Login from "./containers/login/Login";
import SignUp from "./containers/signup/SignUp";
import Products from "./containers/products/Products";
import CartPage from "./containers/cartpage/CartPage";
import Wishlist from "./containers/wishlist/Wishlist";
import Mockman from "mockman-js";
import SingleProductPage from "./components/singleproductpage/SingleProductPage";

function App() {

  const AuthenticatedRoutes = () => {
    return (
      <>
        <Navbar />
        {/* Add your other routes and components here */}
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/main" element={<Main />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/products/:category?" element={<Products />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:id?" element={<SingleProductPage />} />

          <Route path='/mockman' element={<Mockman />} />
        </Routes>
      </>
    );
  };


  return (
    <Router>


      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/*" element={<AuthenticatedRoutes />} />
      </Routes>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
