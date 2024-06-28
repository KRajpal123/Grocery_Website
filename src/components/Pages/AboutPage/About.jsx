import { Grid } from "@mui/material";
import React from "react";
import Hero from "./AboutHero/Hero";

const About = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Hero />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default About;
