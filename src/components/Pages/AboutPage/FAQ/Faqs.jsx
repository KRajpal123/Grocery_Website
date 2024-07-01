import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import AccordionUsage from "../../../Accordians";

const Faqs = () => {
  return (
    <Container maxWidth="xl" sx={{ margin: "20px 0px" }}>
      <Typography
        variant="h3"
        fontWeight={"bold"}
        fontFamily={"revert"}
        textAlign={"center"}
      >
        Some Questions
      </Typography>
      <Grid container margin={"50px 0px"} spacing={2}>
        <Grid item xs={6}>
          <AccordionUsage />
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://irp-cdn.multiscreensite.com/47e017a3/DESKTOP/jpg/9520219.jpg"
            alt="pic"
            style={{ maxWidth: "100%", mixBlendMode: "multiply" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Faqs;
