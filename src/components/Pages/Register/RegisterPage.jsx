import {
  Container,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";
import React from "react";
import SecondaryButton from "../../buttons/SecondaryButton";

const RegisterPage = () => {
  return (
    <Container maxWidth="sm">
      <Grid container mt={5} mb={5}>
        <Grid
          item
          xs={10}
          sx={{ textAlign: "center", margin: "0px 0px 50px 0px" }}
        >
          <Typography variant="h4">
            Register <br />
            Your Account
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} sx={{ margin: "auto" }}>
            <Grid item xs={10}>
              <FormControl sx={{ width: "100%" }} variant="outlined">
                <InputLabel>First Name*</InputLabel>
                <OutlinedInput />
              </FormControl>
            </Grid>
            <Grid item xs={10}>
              <FormControl sx={{ width: "100%" }} variant="outlined">
                <InputLabel>Last Name</InputLabel>
                <OutlinedInput />
              </FormControl>
            </Grid>
            <Grid item xs={10}>
              <FormControl sx={{ width: "100%" }} variant="outlined">
                <InputLabel>Email*</InputLabel>
                <OutlinedInput />
              </FormControl>
            </Grid>
            <Grid item xs={10}>
              <FormControl sx={{ width: "100%" }} variant="outlined">
                <InputLabel>Password*</InputLabel>
                <OutlinedInput />
              </FormControl>
            </Grid>
            <Grid item xs={10}>
              <FormControl sx={{ width: "100%" }} variant="outlined">
                <InputLabel>Confirm Password*</InputLabel>
                <OutlinedInput />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <div>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy."
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div>
                <FormControlLabel
                  control={<Checkbox />}
                  label="By clicking create account, I consent to the privacy policy."
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <SecondaryButton>Create Account</SecondaryButton>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body1">
                By creating an account, you agree to our:
              </Typography>
              <div style={{display:"flex",justifyContent:"space-between",margin:"30px 0px"}}>
                <a href="/register">TERMS & CONDITIONS</a>
                <Divider orientation="vertical" />
                <a href="/register"> PRIVACY & POLICY</a>
              </div>
              <a href="/login">ALREADY HAVE AN ACCOUNT?</a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RegisterPage;
