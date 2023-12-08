import { Container, Grid } from "@mui/material";
import React from "react";
import SecondaryButton from "../../../buttons/SecondaryButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "./Adds.css";

const Adds = () => {
  return (
    <Container>
      <Grid container mt={5} mb={5} spacing={2}>
        <Grid item xs={6} sx={{ backgroundColor: "#f0f4f7" }}>
          <Grid container p={5}>
            <Grid item xs={12}>
              <h2 className="h2">Green lemon &</h2>
              <h1 className="h1">Orange Juice</h1>
              <p className="p1">BEST ORGANE</p>
              <p className="p1">-FLAVOUR</p>
              <p className="p1">YOU NEVER MISS</p>
              <div style={{ paddingTop: "10px" }}>
                <SecondaryButton>
                  Shop Now <ArrowForwardIcon />
                </SecondaryButton>
              </div>
            </Grid>
            <Grid item xs={12}>
              <div id="img-prev">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjUt7QIj3rBZJvyt3pu_NuBwTmL7tp2dL4TEysk7CUAzU7y3TIgYHBYUTOiKk5VHxFhzs&usqp=CAU"
                  alt="img-prev"
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid item xs={12} backgroundColor="#f0f4f7">
              <Grid container spacing={5} p={5}>
                <Grid item xs={6}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPzjPUPj_9XIWyqOLE9D6OpM5yFrB31q1Uw&usqp=CAU"
                    alt="img-prev"
                    style={{ maxWidth: "100%", objectFit: "cover" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <h2 className="h2">
                    Up to 15% off Fresh <br /> Almond Seed
                  </h2>
                  <p className="p2">
                    From 66.69 <span>USD</span>
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} backgroundColor="#f0f4f7" mt={5}>
              <Grid container spacing={2} p={5}>
                <Grid item xs={6}>
                  <h2 className="h2">
                    50% off in Fresh <br />
                    Mango Drinks
                  </h2>
                  <div style={{marginTop:"30px" }}>
                <SecondaryButton>
                  Shop Now <ArrowForwardIcon />
                </SecondaryButton>
              </div>
                </Grid>
                <Grid item xs={6}>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Mnboi_5UGU6JivnAPqc_RHXl6g5KmgrMbQ&usqp=CAU"
                    alt="img-prev"
                    style={{maxWidth:"100%"}}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Adds;
