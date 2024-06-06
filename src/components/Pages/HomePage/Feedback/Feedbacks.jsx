import { Grid, Typography } from "@mui/material";
import React from "react";
import FeedCard from "./FeedCard";

// const clientFeedback = [
//   {
//     name : "shivam"
//   }
// ]

const Feedbacks = () => {
  return (
    <Grid container mt={5}>
      <Grid item xs={12}>
        <Typography variant="body1" align="center">
          Testimonials
        </Typography>
        <Typography variant="h3" align="center">
          Clients Feedback
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FeedCard />
      </Grid>
    </Grid>
  );
};

export default Feedbacks;
