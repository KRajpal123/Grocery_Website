import {
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  CardMedia,
  List,
  ListItem,
  Box,
  FormControl,
  Input,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  Stack,
} from "@mui/material";
import React from "react";
import vegetablesImage from "../../../images/vegetables.jpg";
import homeMade from "../../../images/homemade.jpg";
import naturalFood from "../../../images/naturalfood.jpeg";
import delivery from "../../../images/delivery.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
const style = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  margin: "2px",
};

const company = [
  "About",
  "Blog",
  "All Products",
  "Locations Map",
  "FAQ",
  "Contact Us",
];
const services = [
  "Order Tracking",
  "Wish list",
  "Login",
  "My Account",
  "Terms & Conditions",
  "Promotional Offers",
];

const customerCare = [
  "Login",
  "My Account",
  "Wish List",
  "Order Tracking",
  "FAQ",
  "Contact Us",
];

const socialMedia = [
  {
    id: 1,
    icon: <FacebookIcon />,
  },
  {
    id: 2,
    icon: <TwitterIcon />,
  },
  {
    id: 3,
    icon: <LinkedInIcon />,
  },
  {
    id: 4,
    icon: <YouTubeIcon />,
  },
];

// const allRights = ["all","rights","reserved","@","purePantry","2024"];
// const privacyPolicy = "Terms&Conditionsclaimprivacy&policy";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Footer = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "#f9f4d9", width: "100%", marginTop: "30px" }}
      >
        <Container maxWidth="xl">
          <Paper elevation={3}>
            <Grid container height={"15vh"}>
              <Grid
                item
                xs={3}
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div>
                  <img
                    src={vegetablesImage}
                    alt="vegetable logo"
                    style={{ width: "50px", mixBlendMode: "multiply" }}
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
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div>
                  <img
                    src={homeMade}
                    alt="homemade logo"
                    style={{ width: "50px", mixBlendMode: "multiply" }}
                  />
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
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div>
                  <img
                    src={naturalFood}
                    alt="natural food logo"
                    style={{ width: "100px", mixBlendMode: "multiply" }}
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
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div>
                  <img
                    src={delivery}
                    alt="delivery logo"
                    style={{ width: "50px", mixBlendMode: "multiply" }}
                  />
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
        <Grid container spacing={2} mt={3}>
          <Grid item xs={3}>
            <div style={style}>
              <CardMedia
                sx={{
                  cursor: "pointer",
                }}
              >
                <img
                  src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_640.png"
                  alt="logo"
                  width={"50px"}
                  style={{ mixBlendMode: "multiply" }}
                />
              </CardMedia>
              <Typography variant="h6">
                pure<span style={{ color: "green" }}>Pantry</span>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6"> Company</Typography>
            <List>
              {company.map((Val) => (
                <ListItem key={Val[0]}>{Val}</ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">Services</Typography>
            <List>
              {services.map((value) => (
                <ListItem key={value[0]}>{value}</ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="h6">Customer Care</Typography>
            <List>
              {customerCare.map((c) => (
                <ListItem key={c[0]}>{c}</ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h6">News Letter</Typography>
            <Typography variant="body">
              Subscribe to our weekly Newsletter and receive updates via email.
            </Typography>
            <Box mt={5}>
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel>Email</InputLabel>
                <OutlinedInput
                  endAdornment={
                    <InputAdornment position="end">
                      <SendIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Box>
            <Typography variant="h6">We Accept</Typography>
          </Grid>
        </Grid>
      </div>
      <Grid container backgroundColor="#041113" p={5} color={"white"}>
        <Grid item xs={6}>
          <Typography variant="h6">
            All Rights Reserved @ purePantry2024
          </Typography>
        </Grid>
        <Grid item xs={6} display={"flex"} justifyContent={"flex-end"}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Item>Terms & Conditions</Item>
            <Item>Claim</Item>
            <Item>Privacy & Policy</Item>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
