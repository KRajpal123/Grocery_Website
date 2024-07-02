import { Grid } from "@mui/material";
import React from "react";
import Hero from "./AboutHero/Hero";
import AboutAdds from "./AboutHero/AboutAdds";
import AboutFeatures from "./AboutHero/AboutFeatures";
import TeamMembers from "./AboutHero/TeamMembers";
import Feedbacks from "../HomePage/Feedback/Feedbacks";
import Faqs from "./FAQ/Faqs";
import NewsLetter from "./NewsLetter/NewsLetter";
import Blog from "../HomePage/Blog/Blog";

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
        <Grid
          item
          xs={12}
          sx={{ backgroundColor: "#f9f4d9", margin: "50px 0px" }}
        >
          <Feedbacks />
        </Grid>
        <Grid item xs={12}>
          <Faqs />
        </Grid>
        <Grid item xs={12}>
          <NewsLetter />
        </Grid>
        <Grid item xs={12}>
          <Blog />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default About;
