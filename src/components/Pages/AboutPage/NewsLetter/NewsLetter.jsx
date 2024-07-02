import {
  Container,
  Grid,
  Typography,
  Paper,
  InputBase,
  Divider,
} from "@mui/material";
import React from "react";
import SecondaryButton from "../../../buttons/SecondaryButton";

const NewsLetter = () => {
  return (
    <Grid
      container
      style={{
        height: "70vh",
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
          url(https://png.pngtree.com/thumb_back/fw800/background/20231229/pngtree-vibrant-pear-juice-green-leaves-and-fruits-exploding-with-refreshment-on-image_13912739.png)
        `,
        backgroundSize: "cover",
        backgroundPosition: "bottom right",
        color: "#fff",
      }}
    >
      <Grid item xs={12}>
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height:"100%",
            textAlign:"center"
          }}
        >
          <Typography variant="h4" gutterBottom>
            We make your inbox better
          </Typography>
          <Typography variant="body2" gutterBottom>
            Sign up to our newsletter to receive grooming tips, style
            inspiration, exclusive access to pre-launch product pricing and
            more.
          </Typography>
          <Paper
            component="form"
            sx={{
              p: "6px 4px",
              display: "flex",
              alignItems: "center",
              width: "40vw",
              mt:3
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Email*"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <SecondaryButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              SUBSCRIBE
            </SecondaryButton>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
};

export default NewsLetter;
