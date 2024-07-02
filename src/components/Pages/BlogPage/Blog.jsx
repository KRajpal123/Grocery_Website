import { Grid } from "@mui/material";
import React from "react";
import Hero from "../AboutPage/AboutHero/Hero";
import PaginationHelper from "../../Helpers/Pagination";
import Blog from "../HomePage/Blog/Blog";

const BlogPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Hero name={"Blog"} />
      </Grid>
      <Grid item xs={12}>
        <Blog />
      </Grid>
      <Grid item xs={12}>
        <PaginationHelper />
      </Grid>
    </Grid>
  );
};

export default BlogPage;
