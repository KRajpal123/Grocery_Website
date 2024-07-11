import { Grid } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home";
import About from "./components/Pages/AboutPage/About";
import Shop from "./components/Pages/ShopPage/Shop";
import Blog from "./components/Pages/BlogPage/Blog";
import Contact from "./components/Pages/ContactPage/Contact";
import Footer from "./components/Pages/Footer/Footer";
import LoginPage from "./components/Pages/Login/LoginPage";
import RegisterPage from "./components/Pages/Register/RegisterPage";
import AccountPage from "./components/Pages/Account/AccountPage";
import WishListPage from "./components/Pages/WishList/WishListPage";
import CheckOut from "./components/Pages/CheckoutPage/CheckOut";

const App = () => {
  return (
    <>
      <Grid container>
        <Navbar />
      </Grid>
      <Grid container marginTop={"25px"} pt={5}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/my-account" element={<AccountPage />} />
          <Route path="/wishlist" element={<WishListPage />} />  
          <Route path="/checkout" element={<CheckOut />} />  
        </Routes>
      </Grid>
      <Grid container>
        <Footer />
      </Grid>
    </>
  );
};
export default App;
