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


const routes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/shop", element: <Shop /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/my-account", element: <AccountPage /> },
  { path: "/wishlist", element: <WishListPage /> },
  { path: "/checkout", element: <CheckOut /> }
];

const App = () => {
  return (
    <>
      <Grid container>
        <Navbar />
      </Grid>
      <Grid container marginTop={"25px"} pt={5}>
        <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        </Routes>
      </Grid>
      <Grid container>
        <Footer />
      </Grid>
    </>
  );
};
export default App;
