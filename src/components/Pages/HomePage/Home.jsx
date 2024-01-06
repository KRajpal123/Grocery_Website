import React from "react";
import SimpleSlider from "./Slider";
import Adds from "./adds/Adds";
import Products from "./Products/Products";
import { Grid } from "@mui/material";
const Home = () => {
  return (
    <>
      <Grid container>
        <SimpleSlider />
      </Grid>
      <Grid container>
        <Adds />
      </Grid>
      <Grid container>
        <Products />
      </Grid>
    </>
  );
};

export default Home;
