import { Grid } from "@mui/material";
import React from "react";
import Hero from "../AboutPage/AboutHero/Hero";
import ShopActions from "./ShopActions";
import Featured from "../HomePage/FeaturedProducts/Featured";
import PaginationHelper from "../../Helpers/Pagination";

const Shop = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Hero name={"Shop"} />
      </Grid>
      <Grid item xs={12}>
        <ShopActions />
      </Grid>
      <Grid item xs={12}>
        <Featured />
      </Grid>
      <Grid item xs={12}>
        <PaginationHelper />
      </Grid>
    </Grid>
  );
};

export default Shop;
