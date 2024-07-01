import { Grid } from "@mui/material";
import React from "react";
import Hero from "./AboutHero/Hero";
import AboutAdds from "./AboutHero/AboutAdds";
import AboutFeatures from "./AboutHero/AboutFeatures";
import TeamMembers from "./AboutHero/TeamMembers";

const About = () => {
  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12}>
          <Hero />
        </Grid>
        <Grid item xs={12}>
          <AboutAdds />
        </Grid>
        <Grid item xs={12} sx={{ backgroundColor: "#f9f4d9" }}>
          <AboutFeatures />
        </Grid>
        <Grid item xs={12}>
          <TeamMembers />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default About;
