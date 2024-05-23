import React from "react";
import SimpleSlider from "./Slider";
import Adds from "./adds/Adds";
import Products from "./Products/Products";
import { Grid } from "@mui/material";
import Deals from "./HotDeals/Deals";
import Featured from "./FeaturedProducts/Featured";
import Video from "./Video/Video";
import Feedbacks from "./Feedback/Feedbacks";

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
      <Grid container>
        <Video />
      </Grid>
      <Grid container>
        <Feedbacks />
      </Grid>
    </>
  );
};

export default Home;
