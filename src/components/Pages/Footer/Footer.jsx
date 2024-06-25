import { Container, Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import vegetablesImage from "../../../images/vegetables.jpg";
import homeMade from "../../../images/homemade.jpg";
import naturalFood from "../../../images/naturalfood.jpeg";
import delivery from "../../../images/delivery.jpg";

const Footer = () => {
  return (
    <Container maxWidth="xl" sx={{margin:"20px"}}>
      <Paper elevation={3} p='5'>
      <Grid container>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src={vegetablesImage}
              alt="vegetable logo"
              style={{ width: "50px" }}     
            />
          </div>
          <div>
            <h3>Curated Products</h3>
            <p>Provide curated products for all</p>
            <p>product over INR 1000</p>
          </div>
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img src={homeMade} alt="homemade logo" style={{ width: "50px" }} />
          </div>
          <div>
            <h3>Handmade</h3>
            <p>We ensure the product quality</p>
            <p>that is our main goal</p>
          </div>
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src={naturalFood}
              alt="natural food logo"
              style={{ width: "50px" }}
            />
          </div>
          <div>
            <h3>Natural Food</h3>
            <p>Return product within 3 days</p>
            <p>for any product you buy</p>
          </div>
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img src={delivery} alt="delivery logo" style={{ width: "50px" }} />
          </div>
          <div>
            <h3>Free Home Delivery</h3>
            <p>We ensure the product quality</p>
            <p>that you can trust easily</p>
          </div>
        </Grid>
      </Grid>
      </Paper>
    </Container>
  );
};

export default Footer;
