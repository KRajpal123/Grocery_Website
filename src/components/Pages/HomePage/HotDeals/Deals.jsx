import { Grid, Typography } from "@mui/material";
import React from "react";
import CountDownTimer from "./CountDownTimer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SecondaryButton from "../../../buttons/SecondaryButton";

const Deals = () => {
  return (
    <>
      <Grid container mt={5} sx={{ backgroundColor: "#f9f4d9" }}>
        <Grid item sm={6} xs={12} x={{ display: "flex", alignItems: "center" }}>
          <img
            id="honeyJar"
            src="https://goodmockups.com/wp-content/uploads/2020/01/Free-Honey-Jar-Mockup-PSD-Set-2.jpg"
            alt="honey"
          />
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6" sx={{color:"#80b500"}}>Todays Hot Deals</Typography>
          <Typography variant="h3"sx={{fontWeight:"bold"}} >Original Stock Honey</Typography>
          <Typography variant="h3">Combo Package</Typography>
          <div>
            <CountDownTimer />
          </div>
          <div style={{marginTop:"20px"}}>
          <SecondaryButton >
                Shop Now <ArrowForwardIcon />
            </SecondaryButton>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Deals;
