import { Divider, Grid, Typography, Box } from "@mui/material";
import React from "react";

const Hero = () => {
  return (
    <Grid
      container
      style={{
        height: "50vh",
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
          url(https://png.pngtree.com/thumb_back/fw800/background/20231229/pngtree-vibrant-pear-juice-green-leaves-and-fruits-exploding-with-refreshment-on-image_13912739.png)
        `,
        backgroundSize: "cover",
        backgroundPosition: "bottom right",
        color: "#fff",
      }}
    >
      <Grid
        item
        xs={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "Center",
          flexDirection: "column",
        }}
      >
        <Typography variant="body1" color={"#a2da1c"}>
          {"//"}WELCOME TO OUR COMPANY
        </Typography>
        <Typography variant="h4">About Us</Typography>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h6">Home</Typography>
          <div>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ mx: 2, height: 12, bgcolor: "white", alignSelf: "tretch" }}
            />
          </div>
          <Typography variant="h6" color={'#a2da1c'}>About Us</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
