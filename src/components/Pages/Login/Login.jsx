import {
  Container,
  Grid,
  Typography,
  FormControl,
  OutlinedInput,
  InputLabel,
} from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item sx={12}>
          <Typography variant="h4">Login To Your Account</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={5}>
              <FormControl sx={{ width: "100%",margin:"10px 0px" }} variant="outlined">
                <InputLabel>Email*</InputLabel>
                <OutlinedInput />
              </FormControl>
              <FormControl
                sx={{ width: "100%", margin: "10px 0px" }}
                variant="outlined"
              >
                <InputLabel>Password*</InputLabel>
                <OutlinedInput />
              </FormControl>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
