import { Grid } from "@mui/material";
import React from "react";
import Hero from "../AboutPage/AboutHero/Hero";
import Login from "./Login";

const LoginPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Hero name="Login" />
      </Grid>
      <Grid item xs={12}>
        <Login />
      </Grid>
    </Grid>
  );
};

export default LoginPage;
