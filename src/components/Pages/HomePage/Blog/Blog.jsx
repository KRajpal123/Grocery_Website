import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Blogcard from "./Blogcard";

const Blog = () => {
  return (
   <Container maxWidth="xl">
     <Grid container mt={5}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center">
          Latest Blogs
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Blogcard />
      </Grid>
    </Grid>
   </Container>
  );
};

export default Blog;
