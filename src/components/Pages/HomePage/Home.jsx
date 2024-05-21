import React from "react";
import SimpleSlider from "./Slider";
import Adds from "./adds/Adds";
import Products from "./Products/Products";
import { Grid } from "@mui/material";
import Deals from "./HotDeals/Deals";
import Featured from "./FeaturedProducts/Featured";

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
      <Grid container>
        <Featured />
      </Grid>
    </>
  );
};

export default Home;
