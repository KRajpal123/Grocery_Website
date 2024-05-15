import React from "react";
import SimpleSlider from "./Slider";
import Adds from "./adds/Adds";
import Products from "./Products/Products";
import { Grid } from "@mui/material";
import Deals from "./HotDeals/Deals";

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
      <Grid container>
        <Deals />
      </Grid>
    </>
  );
};

export default Home;
