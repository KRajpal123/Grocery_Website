import { Container, Divider, Grid, Typography, Box } from "@mui/material";
import React from "react";

const AboutAdds = () => {
  return (
    <Container maxWidth="xl">
      <Grid container mt={5} mb={5}>
        <Grid
          item
          xs={6}
          sx={{ display: "flex", justifyContent: "space-around" }}
        >
          <img
            src="https://www.misfinanzasparaminegocio.com/wp-content/uploads/2023/03/Campesinos-sientanse-orgullosos-de-su-trabajo.webp"
            alt="title"
            loading="lazy"
            width={"300px"}
            height={"450px"}
            style={{ borderRadius: "10px" }}
          />
          <img
            src="https://m.media-amazon.com/images/I/51FId4Iv7+L._AC_UF1000,1000_QL80_.jpg"
            alt="title"
            loading="lazy"
            width={"300px"}
            height={"450px"}
            style={{ marginTop: "70px", borderRadius: "10px" }}
          />
        </Grid>
        <Grid item xs={6}>
          <Grid container sx={{ marginTop: "70px" }}>
            <Grid item xs={12}>
              <Typography variant="body1" color={"#a2da1c"}>
                KNOW MORE ABOUT SHOP
              </Typography>
              <Typography
                variant="h2"
                component={"div"}
                fontWeight={"bold"}
                fontFamily={"monospace"}
              >
                Trusted Organic <br />
                Food Store
              </Typography>
              <Box display="flex" alignItems="center" mt={4} mb={3}>
                <div>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      mx: 2,
                      height: 50,
                      bgcolor: "#a2da1c",
                      alignSelf: "tretch",
                      width: 2,
                    }}
                  />
                </div>
                <Typography variant="body2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                  <br />
                  do eiusmod tempor incididunt ut labore
                </Typography>
              </Box>
              <Typography variant="body1">
                sellers who aspire to be good, do good, and spread goodness. We{" "}
                <br />
                democratic, self-sustaining, two-sided marketplace which thrives{" "}
                <br />
                on trust and is built on community and quality content.
              </Typography>
              <Typography variant="h6" mt={3}>Jerry Hensom</Typography>
              <Typography variant="body2">{"/"}shop director</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutAdds;
